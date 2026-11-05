import fs from 'node:fs';

const args = process.argv.slice(2);
const full = args.includes('--full');
const groupsOnly = args.includes('--groups');
const query = args.filter(arg => !['--full', '--groups'].includes(arg)).join(' ').trim();
if (!groupsOnly && !query) {
  console.error('Usage: node lookup-problem.mjs <id-or-title> [--full] | --groups');
  process.exit(2);
}
const index = JSON.parse(fs.readFileSync(new URL('../references/problem-index.json', import.meta.url), 'utf8'));
if (groupsOnly) {
  const groups = [...new Set(index.map(p => p.category))].map(category => ({
    category, count:index.filter(p => p.category === category).length,
    question:index.find(p => p.category === category).categoryQuestion
  }));
  console.log(JSON.stringify(groups, null, 2));
  process.exit(0);
}
const matches = /^\d+$/.test(query)
  ? index.filter(p => p.id === Number(query))
  : index.filter(p => (p.title + ' ' + p.english + ' ' + p.slug).toLowerCase().includes(query.toLowerCase()));
if (!matches.length) throw Error('No Hot 100 problem matches: ' + query);
if (matches.length > 1) {
  console.log(JSON.stringify(matches.map(({id,title,english,category}) => ({
    id,title,english,category
  })), null, 2));
  process.exit(0);
}
const p = matches[0];
const basic = {
  id:p.id, title:p.title, english:p.english, difficulty:p.difficulty,
  category:p.category, categoryQuestion:p.categoryQuestion, cue:p.cue, slug:p.slug
};
console.log(JSON.stringify(full ? p : basic, null, 2));
