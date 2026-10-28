---
title: '从一株"长斑"的拟南芥，到一个离子通道：SLAC1 论文课堂汇报记录'
publishDate: 2026-10-28
description: '精读 Vahisalu et al. (2008) Nature：正向遗传学锁定植物保卫细胞 S 型阴离子通道 SLAC1 的完整故事线'
tags: ['biology', 'plant physiology', 'paper reading', 'Arabidopsis', 'Nature 2008']
category: 'Impressions'
---

## 一、从一个日常现象开始：气孔是怎么关上的

叶片上的气孔由两个保卫细胞围成，它控制气体的进出和水分的流失——蒸腾作用的水汽，就是从这道"闸门"出去的。

那么气孔的开闭由什么决定？核心概念只有一句话：**吸水和失水，本质上由细胞内溶质分子的数量决定**。细胞内溶质多、渗透压高，水就进入细胞，细胞膨胀，把气孔撑开；溶质少，水往外走，细胞失水收缩，气孔关闭。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_02.png" alt="保卫细胞与气孔" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">保卫细胞的吸水与失水决定气孔开闭</p>
</div>

那谁在调控溶质的进出？这就轮到主角登场了。整个失水过程分五步：

1. 细胞膜上的 H⁺-ATPase 不断把氢离子泵到细胞外，维持膜内的负电势；
2. 胁迫信号（ABA、ROS、NO、CO₂）引起 Ca²⁺ 内流，激活阴离子通道；
3. 阴离子通道打开，Cl⁻ 等阴离子外流，膜**去极化**；
4. 去极化作为"开关"激活 GORK 钾通道，K⁺ 持续外流；
5. 溶质流失、渗透压降低、水外流——气孔关闭。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_03.png" alt="气孔关闭的五步级联" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">气孔关闭的五步级联：第 3 步的阴离子通道是整个级联的 switch</p>
</div>

这五步里最关键的是第 3 步：**阴离子通道充当整个级联反应的开关**，把后续所有过程打开。

## 二、一个悬而未决的问题：通道是谁

这个阴离子通道的存在早有电生理学证据，但"它到底是哪个蛋白"一直是个谜。人们一开始的思路是在动物细胞里找同源蛋白，候选是 AtCLCa——但验证发现两条都对不上：定位不对（它在液泡膜上而不是质膜），运的东西也不对（它是 H⁺/NO₃⁻ 反向转运体，是双向交换而非单向阴离子外排）。

> **保卫细胞质膜上的 S 型阴离子通道，到底是谁？这正是这篇论文要回答的问题。**

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_04.png" alt="候选蛋白被排除" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">候选 AtCLCa 因定位和功能不符被排除</p>
</div>

## 三、正向遗传学：从一株"长斑"的拟南芥开始

研究者的策略是经典的正向遗传学：从表型出发找基因。

首先用 EMS（甲基磺酸乙酯）做化学诱变。EMS 会让 DNA 中的鸟嘌呤发生烷基化，复制时错配为与胸腺嘧啶配对，最终造成 G:C → A:T 的碱基置换，高效产生点突变。诱变后的 M1 代突变是杂合的，所以自交得到 M2 代再筛选。

筛选压力用的是臭氧——臭氧会诱导 ROS（活性氧）产生，对 ROS 防御有缺陷的植株，叶片上会出现细胞死亡的黄斑。这个设计思想很巧妙：用"**气孔失控 → 臭氧进得多 → ROS 敏感**"来间接钓取气孔调控基因。研究者还用离子渗漏（ion leakage）定量细胞死亡程度：细胞死了、膜破了，内容物就会漏出来。

这个突变体最初叫 *rcd3*（radical-induced cell death），在这篇文章里被重新命名为 *slac1*——**slow anion channel-associated**。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_05.png" alt="EMS 筛选" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">EMS 诱变 + 臭氧筛选：rcd3 → slac1</p>
</div>

在动手定位之前，还要先回答一个逻辑问题：这个表型是一个基因导致的，还是多基因的整体现象？把突变体与野生型杂交，后代 3/4 正常、1/4 长斑——完美符合孟德尔定律。因此，我们得到了两个重要结论：

- 这是**单基因隐性突变**，只有纯合个体才表现表型；
- 臭氧敏感性总是和气孔关不上、失水的表型**共分离**——两者由同一个基因控制。

从此，这个突变等位基因有了正式名字：*slac1-1*。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_06.png" alt="遗传分析" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">3:1 分离比确认单基因隐性突变</p>
</div>

## 四、图位克隆：把基因"夹"出来

接下来是整个研究最漂亮的部分。研究者把 Col-0 背景的突变体和 Ler 生态型（波兰背景）杂交，F1 自交得到 F2 作图群体。两个生态型之间存在大量天然 SNP（单核苷酸多态性），可以当"路标"使用。

关键的遗传学逻辑是：减数第一次分裂前期（粗线期），同源染色体的非姐妹染色单体发生交叉互换，F2 的染色体成了两种背景拼接的"马赛克"。而由于表型是隐性的，**表现出失水/斑点的 F2 植株，在 *slac1* 位点上必定是纯合 Col-0 背景**——这就给出了极其便利的筛选条件：专挑蔫的、长斑的植株。研究者最终筛到了 572 株这样的 F2。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_08.png" alt="作图群体" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">Col-0 × Ler 作图群体：患病 F2 在 slac1 位点必为纯合 Col</p>
</div>

怎么利用 SNP 鉴定纯合性？用 CAPS 标记。以限制性内切酶 EcoRI 为例：它识别 GAATTC 并切开；如果 Ler 背景中这个位点变成了 GATTTC，酶就切不动。PCR + 酶切 + 跑胶后：Col 纯合是 300+200 bp 两条带，杂合是三条带，Ler 纯合是 500 bp 一条带。然后看连锁：标记离位点远，三种基因型比例约 1:2:1（随机重组）；越靠近位点，越是清一色 Col/Col；标记若就在位点上，572 株全部 Col/Col。

就这样一路收窄，最终用 SGCSNP9727 和 SGCSNP9735 两个标记，把区间夹在 1 号染色体上 **116.5 kb** 的范围内——里面有 **34 个基因**。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_09.png" alt="候选区间" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">用 CAPS 标记把区间收窄到 116.5 kb、34 个基因</p>
</div>

## 五、锁定 At1g12480

34 个基因里哪个是答案？回到研究对象本身——我们研究的是保卫细胞，那就看谁只在保卫细胞里干活。

研究者把候选基因的启动子接上 GUS 报告系统（uidA 基因编码 β-葡萄糖醛酸酶，催化底物变蓝），染色后表达部位一目了然；再结合已有的保卫细胞/叶肉细胞基因芯片数据：**34 个基因里，只有 At1g12480 在保卫细胞中的表达量比叶肉细胞高 10 倍以上**。两条证据完全吻合。

> At1g12480 这个名字其实是"门牌号"：At = 拟南芥（Arabidopsis thaliana），1 = 1 号染色体，g = gene，12480 = 基因序号。

怎么最终确认？研究者直接订购了 T-DNA 插入突变体（农杆菌 T-DNA 插入基因组打断基因）。结果，插在 At1g12480 里的两个株系（后来的 *slac1-3* 和 *slac1-4*）表现出和 *slac1-1* 一模一样的表型——这叫**表型复制（phenocopy）**：独立来源的损伤打到同一个基因、得同样的病，是"找对基因"最有力的遗传学证据。

最后测序收尾：Sanger 测序发现编码区一个 **C→T** 单碱基替换——正好呼应 EMS 的诱变机制。第 456 位密码子从 TCT（丝氨酸）变成 TTT（苯丙氨酸），即 **S456F 错义突变**，蛋白失去功能。证据链完全闭环。这个蛋白有 10 个预测跨膜结构域，突变位点就标注在疏水性图上。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_10.png" alt="锁定基因" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">GUS 报告系统 + T-DNA 验证 + 跨膜结构预测</p>
</div>

顺带一提，这个研究也集中体现了拟南芥作为模式生物的四大优势：**生命周期短**（几个月拿到 572 株 F2）、**生态型多**（Col/Ler 提供天然 SNP 标记）、**基因组早已测完**（区间一定，候选基因立刻列出）、**有公共 T-DNA 突变体库**（想验证哪个基因直接订种子）。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_11.png" alt="为什么选拟南芥" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">拟南芥的四大优势在这项研究中全部用上了</p>
</div>

## 六、蛋白在哪里：洋葱表皮与赫氏丝

基因找到了，接下来看蛋白在哪里。注意：这个实验用的不是拟南芥保卫细胞，而是**洋葱内表皮细胞**——保卫细胞只有十几微米，又小又难做瞬时转化；洋葱表皮是天然的单层大细胞，撕下来就能做基因枪转化，当天出结果，还没有叶绿体自发荧光干扰。

研究者把 SLAC1 与 GFP 融合表达，再用膜染料 FM4-64 共染，merge 后信号重合——初步提示在质膜上。但这还不够，贴壁内侧的也可能是别的膜结构。决定性证据来自**质壁分离**：细胞失水后原生质体向内收缩，但质膜在某些锚定位点仍连着细胞壁，被拉成一根根细长的膜丝——这就是**赫氏丝（Hechtian strands）**，本质上是质膜的延伸。荧光出现在这些细丝上，说明蛋白跟着质膜走，而不是附着在细胞壁上。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_12.png" alt="质膜定位" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">GFP 共定位 + 质壁分离后的赫氏丝，确证质膜定位</p>
</div>

## 七、从基因型回到表型，再到电生理

之前的路线是"从表型到基因型"；接下来反过来走：从基因型回到表型。

环境刺激下，突变体的气孔响应全面迟钝：光照变化、湿度下降、CO₂ 升高（400 → 800 ppm），野生型气孔迅速关闭，突变体几乎不动。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_13.png" alt="光照响应" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">光照变化下，野生型气孔导度快速下降又回升，突变体响应迟钝</p>
</div>

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_14.png" alt="环境刺激响应" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">湿度下降、CO₂ 升高时，突变体气孔几乎不响应</p>
</div>

信号分子层面，ABA、H₂O₂、硝普钠（SNP，一氧化氮供体——注意此 SNP 非彼 SNP）、Ca²⁺ 脉冲，结果都一样。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_15.png" alt="信号分子响应" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">ABA、H₂O₂ 处理下突变体同样迟钝</p>
</div>

但请注意：**这些全是间接证据**。我们想研究的是阴离子外流，目前却只看到了表型。要下结论，必须直接看电生理学证据——膜片钳。

先学读图：研究者把膜电位钳住，瞬间跳到某个测试电压保持几秒，记录电流，一条曲线就是一个电压阶梯。图里越靠下的曲线对应越负的电压，**曲线往下沉得越多 = 内向电流越大**（负电荷流入，等价于阴离子外流——正是 S 型通道开放时 Cl⁻/苹果酸根排出的过程）。再看时间形状：跳电压后电流花一两秒慢慢爬升、持续不衰减——这就是 "S-type = slow" 命名的由来，是这个通道的"指纹"。

结果一目了然：在 2 µM Ca²⁺ 激活条件下，野生型出现大而缓慢的 S 型电流；而 *slac1-1*（点突变）和 *slac1-3*（T-DNA 插入）几乎全是平线。两个分子机制完全不同的独立突变体表现一致——这就是"就是这个基因负责这个通道"的核心证据。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_17.png" alt="S 型电流消失" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">膜片钳：2 µM Ca²⁺ 激活下，slac1-1 与 slac1-3 的 S 型电流几乎消失</p>
</div>

换用 ABA 激活（更生理的条件），结论不变。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_19.png" alt="ABA 激活的膜片钳" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">ABA 激活条件下：突变体 S 型电流同样显著降低</p>
</div>

而 R 型（rapid，快速型）阴离子通道在突变体中完全正常——说明 SLAC1 的作用是通道类型特异的，也首次从遗传上证明：**S 型和 R 型阴离子通道是两套独立的蛋白**。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_18.png" alt="R 型通道不受影响" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">R 型电流在野生型与 slac1-3 之间几乎重合：S/R 是两套独立蛋白</p>
</div>

## 八、最精彩的一笔：必要 ≠ 充分

整篇文章最值得品味的，是作者措辞的谨慎：他们只说 SLAC1 是 **"associated"（相关联的）**，而不直接说"它就是通道本身"。

为什么？因为"敲掉基因 X，通道功能消失"只说明 X 是**必需**的——它完全可能是通道的辅助亚基、负责把通道运到膜上的因子，或一个调控蛋白。**必要不等于充分。**

充分性需要这样验证：把 SLAC1 单独放到没有植物蛋白背景的系统（如爪蟾卵母细胞）中表达，看 S 型电流能否重建。2008 年这篇文章发表时，单独表达 SLAC1 没有重建出电流——所以作者只能谨慎地称它为"关键组成部分"。直到 2009 年，后续研究把 SLAC1 与 **OST1 激酶**共表达，电流重建成功：SLAC1 需要磷酸化激活才能工作，同时也确认——**SLAC1 就是通道孔道本身**。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_21.png" alt="必要与充分" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">必要 ≠ 充分：2008 年的谨慎命名，2009 年被后续研究凿实</p>
</div>

## 九、一个时代问题：为什么 2008 年不直接测序

听完整个流程，一个自然的疑问是：又杂交又作图又酶切，这么麻烦，为什么不直接测个序？

这和时代有关。2008 年做全基因组重测序，一是贵、二是慢——拟南芥 1.25 亿 bp 的基因组，第一个序列是 2000 年国际联盟花了好几年才完成的；高通量测序 2006 年才刚诞生，第一个"靠深度测序直接定位突变"的方法（SHOREmap）2009 年才发表，比这篇论文还晚一年。

更根本的问题是：EMS 会在全基因组撒下成百上千个背景突变，测完序拿到一长串 SNP，你也不知道哪个是致病的——筛选逻辑最终还是要靠"纯合表型 ↔ 连锁位点"。所以研究者是把钱花在刀刃上：区间缩到 34 个基因后，靠芯片和 T-DNA 两个廉价信息锁定候选，最后只对一个基因做测序。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_22.png" alt="为什么当年不直接测序" style="max-width: 100%; height: auto;" />
  <p style="text-align: center; margin-top: 0.5rem;">2008 年的技术背景下，图位克隆是性价比最优解</p>
</div>

如果今天重做：回交几代 + 患病 F2 混池重测序，几周就能搞定。这告诉我们一个道理：

> **实验方法永远受时代技术的约束，但好的科学逻辑是超越时代的。**

---

## 十、现场问答实录

**问：图上 S 型通道的差异看着并不明显？**
答：那张对比图里差异不大的是 R 型通道——R 型本来就没有差异，这恰恰是为了说明 S/R 是两套东西；S 型的差异在前面那张图里（野生型电流明显下沉、突变体几乎平线），非常显著。

**问：找到的是一个点突变，那这个蛋白本身没有了吗？**
答：不是没有了，是失去功能。S456F 把侧链性质差异很大的苯丙氨酸换进保守的跨膜区，蛋白还在但丧失功能，效果和敲除类似——T-DNA 插入的 slac1-3/4 就相当于"把基因打断"的情况，表型一致。

**问：为什么荧光定位用洋葱表皮，不用保卫细胞？**
答：保卫细胞一是很小（十几微米），二是很难做瞬时转化。洋葱表皮是单层大细胞，撕下来直接基因枪转化就能观察，还没有叶绿体自发荧光干扰，是理想的替代材料。

**建议**：要证明表型确实由这个基因导致，最好展示互补（回复）实验的证据。论文其实在 Fig 1b 做了 slac1-1::SLAC1 基因组互补，回补后失水表型恢复正常——汇报中未来得及展示，这是一个可以补强的点。


---

## 附录：逐页讲稿对照

> 以下为汇报当天的完整讲稿存档，按 PPT 页码组织。口语化表述保留。

### 第 1 页｜标题页

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_01.png" alt="第1页" style="max-width: 100%; height: auto;" />
</div>

大家好，今天我们组汇报的论文是 2008 年发表在《Nature》上的这篇文章。它研究的是一个叫 SLAC1 的蛋白，对植物保卫细胞上的 S 型阴离子通道非常重要。选这篇论文有两个原因：一是它用的模式生物是拟南芥；二是第一单位是芬兰赫尔辛基大学，我对这所学校的植物逆境研究很感兴趣。

### 第 2 页｜保卫细胞是干什么的

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_02.png" alt="第2页" style="max-width: 100%; height: auto;" />
</div>

正式开始前先请大家回顾：保卫细胞到底是干什么的？【提问】对，它通过自身的开闭控制气体进出和水分流失，比如蒸腾作用。这里强调一个核心概念：吸水和失水本质上由细胞内溶质分子的数量决定——溶质多、渗透压高，水进入细胞，气孔撑开；溶质少，水外流，气孔关闭。

### 第 3 页｜阴离子通道的重要性（五步流程）

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_03.png" alt="第3页" style="max-width: 100%; height: auto;" />
</div>

谁在调控溶质进出？这就要介绍阴离子通道。五步流程：①H⁺-ATPase 维持膜内负电势；②ABA/ROS/NO/CO₂ 引起钙离子内流，激活阴离子通道；③Cl⁻ 外流导致膜去极化——大家还记得去极化是什么吗？电位从负往上抬；④去极化作为开关激活 GORK，K⁺ 外流；⑤溶质流失、失水、气孔关闭。最重点是第③步：阴离子通道是整个级联的 switch。

### 第 4 页｜通道的身份之谜

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_04.png" alt="第4页" style="max-width: 100%; height: auto;" />
</div>

通道的存在早有电生理证据，但蛋白身份未知。候选 AtCLCa 被排除：定位在液泡而不是质膜，而且是 H⁺/硝酸根双向 exchanger，不是单向阴离子通道。所以这个通道到底是谁？这就是本文要回答的问题。

### 第 5 页｜EMS 诱变与臭氧筛选

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_05.png" alt="第5页" style="max-width: 100%; height: auto;" />
</div>

EMS 即甲基磺酸乙酯，让鸟嘌呤烷基化，复制时错配为与 T 配对，造成 G:C→A:T 点突变。M1 代突变是杂合的，要自交得到 M2 再筛。筛选用臭氧——它诱导 ROS，防御有缺陷的植株叶片会出现细胞死亡黄斑；再用离子渗漏定量细胞死亡。突变体最初叫 rcd3（radical-induced cell death），本文重新命名为 slac1——slow anion channel-associated，S 就是 slow。

### 第 6 页｜先确认：这个基因真的存在吗

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_06.png" alt="第6页" style="max-width: 100%; height: auto;" />
</div>

定位之前先问：表型是一个基因还是多基因导致的？与野生型杂交，后代 3/4 正常、1/4 长斑——单基因隐性突变。同时臭氧敏感与失水表型共分离，说明由同一基因控制。从此可以叫它 slac1-1，指这个具体的突变等位基因。

### 第 7 页｜slac1-1 与气孔有没有关系

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_07.png" alt="第7页" style="max-width: 100%; height: auto;" />
</div>

发蔫也可能是吸水被阻断，不一定与气孔有关。先排除变量：气孔密度无差异；但突变体气孔导度明显更高——气孔关不上。离体叶片 90 分钟：突变体失水 70–80%，野生型约 30%。结论：表型源于气孔调控缺陷，臭氧伤害是因为更多 O₃ 从关不上的气孔进入。

### 第 8 页｜建立作图群体

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_08.png" alt="第8页" style="max-width: 100%; height: auto;" />
</div>

Col-0 突变体 × Ler（波兰生态型）杂交，F1 自交得 F2。两个生态型间有大量天然 SNP 当"路标"。减数第一次分裂前期发生交叉互换，F2 染色体成为马赛克。关键问题：表现出失水/斑点的 F2 在 slac1 位点上基因型有什么特点？【提问】必须是纯合——隐性突变，且纯合片段来自突变亲本 Col-0。最终筛出 572 株患病 F2。

### 第 9 页｜CAPS 标记定位

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_09.png" alt="第9页" style="max-width: 100%; height: auto;" />
</div>

以 EcoRI 为例：识别 GAATTC 并切开；Ler 背景中变成 GATTTC 就切不动。Col 纯合 = 300+200 bp 两条带，杂合 = 三条带，Ler 纯合 = 500 bp 一条带。标记离位点远 → 三种基因型约 1:2:1；越近越偏向 Col/Col；就在位点上 → 572 株全部 Col/Col。最终用 SGCSNP9727 和 SGCSNP9735 把区间夹到 1 号染色体 116.5 kb，含 34 个基因。

### 第 10 页｜锁定 At1g12480

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_10.png" alt="第10页" style="max-width: 100%; height: auto;" />
</div>

我们研究的是哪个细胞？【提问】保卫细胞。34 个基因里只有 At1g12480 在保卫细胞表达量比叶肉细胞高 10 倍以上，GUS 染色与芯片数据吻合。名字含义：At=拟南芥，1=1 号染色体，g=gene，12480=序号。订购 T-DNA 插入株系验证：两个株系表型与 slac1-1 一致（表型复制，即 slac1-3/4）。Sanger 测序发现 C→T：第 456 位丝氨酸（TCT）→ 苯丙氨酸（TTT），即 S456F，蛋白失能，证据链闭环。蛋白建模显示 10 个预测跨膜结构域。

### 第 11 页｜为什么选择拟南芥

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_11.png" alt="第11页" style="max-width: 100%; height: auto;" />
</div>

四大优势：生命周期短（几个月拿到 572 株 F2）；生态型多（Col/Ler 提供天然 SNP）；基因组早已测完（区间一定，34 个候选立刻列出）；公共 T-DNA 库可直接订种子。

### 第 12 页｜SLAC1 定位在细胞膜上吗

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_12.png" alt="第12页" style="max-width: 100%; height: auto;" />
</div>

注意这不是保卫细胞，是洋葱内表皮细胞。SLAC1::GFP 融合 + 膜染料 FM4-64 共染，merge 重合——初步提示质膜。决定性证据是质壁分离：质膜被锚定位点拉住形成赫氏丝，荧光出现在细丝上，说明蛋白跟着质膜走而非附着在壁上。SLAC1 确认定位于质膜。

### 第 13–14 页｜从基因型回到表型：环境刺激

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_13.png" alt="第13页" style="max-width: 100%; height: auto;" />
</div>

之前的路线是"从表型到基因型"，现在反过来。光照变化时野生型气孔导度快速下降又回升，突变体（浅色，slac1-3 就是订购的 T-DNA 株系）响应迟钝；湿度、CO₂（400→800 ppm）也一样：野生型迅速关闭，突变体几乎不动。突变体失去了对气孔开度的正常调控。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_14.png" alt="第14页" style="max-width: 100%; height: auto;" />
</div>

### 第 15–16 页｜从基因型回到表型：信号分子

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_15.png" alt="第15页" style="max-width: 100%; height: auto;" />
</div>

还记得五步流程里激活钙离子通道的因素吗？ABA、ROS。ABA 和 H₂O₂ 处理下，野生型响应都比突变体快。第 16 页的 SNP 是硝普钠——一氧化氮供体，不是单核苷酸多态性。纵轴 aperture 本义"光圈"，这里指气孔开度。NO 和 Ca²⁺ 脉冲结果相同：野生型关闭快，突变体迟钝。但注意：这些全是间接证据，必须直接看电生理。

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_16.png" alt="第16页" style="max-width: 100%; height: auto;" />
</div>

### 第 17 页｜膜片钳：S 型电流消失了

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_17.png" alt="第17页" style="max-width: 100%; height: auto;" />
</div>

全细胞膜片钳：每条曲线是一个测试电压的记录，越靠下电压越负，往下沉得越多 = 内向电流越大（等价于阴离子外流）。电流慢爬升、持续不衰减——"S-type = slow"的指纹。标尺 50 pA / 2 s。2 µM Ca²⁺ 激活下，野生型电流明显，slac1-1 和 slac1-3 几乎全是平线；I–V 曲线汇总同样。一个点突变、一个 T-DNA 插入，表现一致——核心证据。

### 第 18 页｜R 型通道不受影响

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_18.png" alt="第18页" style="max-width: 100%; height: auto;" />
</div>

阴离子通道有 S 型（slow）和 R 型（rapid）两类。R 型电流在野生型和 slac1-3 间几乎重合——SLAC1 只影响 S 型，作用具有通道类型特异性；S 型和 R 型是两套独立的蛋白。

### 第 19 页｜换一种激活条件：ABA

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_19.png" alt="第19页" style="max-width: 100%; height: auto;" />
</div>

第 17 页用钙离子（直接激活），这页换 ABA（间接、生理的激活条件，要靠细胞自身信号通路）。结果一样：野生型有明显 S 型电流（标尺 20 pA / 4 s，比高钙激活小，因为胞内信号机器有损耗），突变体电流显著降低。SLAC1 是 Ca²⁺ 和 ABA 两条通路的共同下游，直接作用于阴离子外流层面。

### 第 20 页｜结论

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_20.png" alt="第20页" style="max-width: 100%; height: auto;" />
</div>

大家觉得我们得到了什么结论？【提问】三条：①SLAC1 是植物 S 型阴离子通道的关键组分——首个被鉴定的植物质膜阴离子通道基因；②它是 ABA、CO₂、Ca²⁺、ROS、NO 多条逆境信号通路共同的下游执行者；③S 型和 R 型阴离子通道是两套独立的蛋白。

### 第 21 页｜Wait a second：必要 ≠ 充分

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_21.png" alt="第21页" style="max-width: 100%; height: auto;" />
</div>

为什么文章只敢说 "associated"？因为"敲掉基因、通道功能消失"只说明必需——它也可能是辅助亚基、运输因子或调控蛋白。充分性验证：把 SLAC1 单独放到爪蟾卵母细胞这类无植物背景的系统里表达。2008 年单独表达没有重建出电流，所以作者谨慎命名；2009 年与 OST1 激酶共表达重建成功——SLAC1 需要磷酸化激活，同时确认它就是通道孔道本身。

### 第 22 页｜What if：为什么当年不直接测序

<div style="text-align: center;">
  <img src="/images/blog15/SLAC1_22.png" alt="第22页" style="max-width: 100%; height: auto;" />
</div>

一是贵二是慢：拟南芥 1.25 亿 bp，第一个基因组 2000 年才完成；高通量测序 2006 年才诞生，第一个测序定位突变的方法 2009 年才发表。更根本的是：EMS 撒下成百上千个背景突变，测完序也不知道哪个致病，筛选逻辑仍要靠连锁。他们是把钱花在刀刃上：最后只测一个基因。今天重做：回交 + 混池重测序，几周搞定。实验方法受时代约束，好的科学逻辑超越时代。

---

*记录整理：本博客正文按科学故事线重组自当天讲稿；附录为逐页讲稿存档。*
*论文引用：Vahisalu T., Kollist H., Wang Y.-F., et al. SLAC1 is required for plant guard cell S-type anion channel function in stomatal signalling. Nature 452, 487–491 (2008).*
