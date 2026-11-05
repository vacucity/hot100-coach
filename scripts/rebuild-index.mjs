import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const site = process.argv[2] || process.env.HOT100_SITE || path.resolve(process.cwd(), 'hot100-site');
const dist = path.join(site, 'dist');
const catalog = JSON.parse(fs.readFileSync(path.join(dist, 'problem-meta.json'), 'utf8'));
const recognition = vm.runInNewContext(
  fs.readFileSync(path.join(dist, 'recognition.js'), 'utf8') + '\n;({recognitionGuides, problemCues})',
  {}, {timeout: 2000}
);
const approaches = vm.runInNewContext(
  fs.readFileSync(path.join(dist, 'approaches.js'), 'utf8') + '\n;problemApproaches',
  {}, {timeout: 2000}
);
const groupNames = ['哈希','双指针','滑动窗口','子串','普通数组','矩阵','链表','二叉树','图论','回溯','二分查找','栈','堆','贪心算法','动态规划','多维动态规划','技巧'];
if (catalog.length !== 100 || recognition.recognitionGuides.length !== groupNames.length) {
  throw Error('Expected 100 problems and 17 categories');
}
const index = catalog.map(p => {
  const guide = recognition.recognitionGuides[p.group];
  const route = guide?.routes.find(r => r.ids.includes(p.id));
  const pair = approaches[p.id];
  if (!route || !recognition.problemCues[p.id] || !Array.isArray(pair) || pair.length !== 2) {
    throw Error('Incomplete recognition or bilingual approach for problem ' + p.id);
  }
  return {
    id:p.id, title:p.title, english:p.english, difficulty:p.difficulty, slug:p.slug,
    category:groupNames[p.group], categoryQuestion:guide.question,
    cue:recognition.problemCues[p.id], signal:route.signal, method:route.method,
    why:route.why, avoid:route.avoid, approachZh:pair[0], approachEn:pair[1]
  };
});
if (new Set(index.map(p => p.id)).size !== 100) throw Error('Duplicate problem ID');
const output = new URL('../references/problem-index.json', import.meta.url);
fs.writeFileSync(output, JSON.stringify(index, null, 2) + '\n', 'utf8');
console.log('Wrote ' + index.length + ' problems to ' + output.pathname);
