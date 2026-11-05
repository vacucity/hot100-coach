# Hot 100 recognition checks

Use these checks to challenge a proposed pattern. The bundled `problem-index.json` contains the problem-specific decisive signal, method, reason, and common confusion for all 100 problems; use `scripts/lookup-problem.mjs <id> --full` when ready to reveal them.

| Category | Decide from the constraint | Common misread to test |
| --- | --- | --- |
| Hash map / 哈希 | Repeated lookup, frequency, canonical group key, or set membership eliminates rescanning. | “Consecutive numbers” may mean adjacent **values**, not an array window. |
| Two pointers / 双指针 | Ordered scan or in-place write has a proven safe pointer move. | State why discarding one side cannot remove the optimum. |
| Sliding window / 滑动窗口 | Contiguous interval whose validity updates as endpoints move. | With negative values, a sum window usually lacks monotonicity. |
| Substring mechanisms / 子串 | Separate prefix-sum counting, window extrema, and minimum coverage by their required operation. | “Contiguous” alone does not choose one template. |
| Array / 普通数组 | Look for an ending-at-index optimum, sorted interval merge, reversal, prefix/suffix product, or value-to-index placement. | These have different invariants despite sharing an array input. |
| Matrix / 矩阵 | Use row/column order, boundary layers, coordinate transform, or delayed row/column marks. | Check single row/column and whether both axes are sorted. |
| Linked list / 链表 | Identity, `next` rewiring, fast/slow gap, merge order, or O(1) cache updates drive the structure. | Compare node identity rather than equal values for intersection. |
| Binary tree / 二叉树 | Define what DFS returns to the parent and what is settled at the current node; use BFS when layers matter. | A path returned upward cannot branch through both children. |
| Graph / 图论 | Distinguish connected components, multi-source distance, dependency order, and prefix trie. | Mark visited on enqueue; do not use DFS depth as shortest path. |
| Backtracking / 回溯 | Enumerate all legal choices; choose, recurse, undo, with problem-specific pruning. | Combination order, permutation order, and reusable elements change the search tree. |
| Binary search / 二分 | A sorted domain or monotone feasibility predicate lets one half be discarded. | Define the first-true boundary and loop interval before coding. |
| Stack / 栈 | Nested matching uses a plain stack; next greater/smaller boundaries use monotone indices. | Equal values change strict versus non-strict pop rules. |
| Heap / 堆 | Maintain top K or a changing median across repeated updates. | A one-time selection may also admit quickselect; say what the heap stores. |
| Greedy / 贪心 | A local choice has an exchange, reachability, or boundary argument proving global correctness. | A plausible local choice without a proof may need DP. |
| Dynamic programming / 动态规划 | Overlapping subproblems need a state, transition, base case, and iteration order. | Decide 0/1 versus reusable items before choosing loop direction. |
| Multidimensional DP / 多维动态规划 | Two coordinates or prefixes define the state, such as grid paths or edit distance. | Distinguish subsequence from substring and counting from minimizing. |
| Techniques / 技巧 | Exploit a special invariant: XOR cancellation, majority voting, three-way partition, next permutation, or functional graph. | Verify the problem's guarantee before applying the trick. |

For every classification, ask: **What exact fact in this statement makes the method valid? What nearby method fails, and on what counterexample?** A category label is a search aid, not a proof.
