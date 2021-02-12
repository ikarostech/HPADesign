import { Vector2 } from 'three';
import { AIAirfoilPoint } from './AIAirfoilPoint';

describe("AIAirfoilPointのプロパティ検証", () => {
  const testAirfoilY = [0.0, 0.0015348070112863, 0.00306961402257262, 0.00460442103385893, 0.00613922804514523, 0.00767403505643155, 0.00920884206771784, 0.0107436490790042, 0.0122784560902905, 0.0138132631015768, 0.0153480701128631, 0.0168828771241494, 0.0184176841354357, 0.019952491146722002, 0.0214872981580083, 0.0230221051692946, 0.0245569121805809, 0.0260917191918672, 0.0276265262031536, 0.0291613332144399, 0.0306961402257261, 0.0322309472370124, 0.0337657542482988, 0.0353005612595851, 0.0368353682708714, 0.0383701752821577, 0.039904982293444004, 0.0414397893047303, 0.0429745963160166, 0.0445022799481611, 0.0460171234462661, 0.0475185953129215, 0.0490061343062964, 0.0504767980343985, 0.051931574363904005, 0.053370207786220994, 0.0547891464345124, 0.0561891483040354, 0.0575690736547265, 0.0589254104950631, 0.0602596065358777, 0.0615662692307477, 0.0628464990285914, 0.0640962467753546, 0.0653123082283908, 0.0664933554779547, 0.0676351422541425, 0.0687310325447861, 0.0697774707510155, 0.0707681283133855, 0.0716951257268849, 0.0725463115456489, 0.07330938670701599, 0.0739699287382112, 0.0744967694911451, 0.0748585406250802, 0.075, 0.074946616001144, 0.0747931274084862, 0.0745318588578499, 0.0741532323760955, 0.0736439245086985, 0.0730000507298722, 0.0722102798015436, 0.0712619715364048, 0.0701409821700522, 0.0688314339416638, 0.0673150994961725, 0.0655594697044797, 0.0635490456495413, 0.0612516264185764, 0.0586150238997305, 0.0555987107608544, 0.0521363489996419, 0.0481372249595461, 0.0434842380832646, 0.038017157058294004, 0.031466236169147996, 0.0239181317597871, 0.0152782995046831, 0.0, -0.0075311641256898204, -0.0101577559553335, -0.012789476674030001, -0.015151462663264, -0.0169836818508325, -0.0184335444432599, -0.0195724918155013, -0.0204698785941119, -0.0211707534630331, -0.0216970417681207, -0.0220740165835365, -0.022329888983583998, -0.0224685322480135, -0.0225051349747004, -0.0224579496794411, -0.0223270832291717, -0.0221209531619641, -0.0218469341846206, -0.021511510361225, -0.0211204019006489, -0.0206726494195431, -0.0201774767999889, -0.0196379252396446, -0.0190580709087015, -0.0183417739207276, -0.0174589909798896, -0.0164618692927271, -0.0153789150787103, -0.0142386456897244, -0.013053024976885, -0.0118320684506782, -0.0105858037642451, -0.00932013265833265, -0.00804581823601797, -0.006761323677676121, -0.0054689815356982795, -0.00417149759718621, -0.00286875839571382, -0.00156997912526807, -0.000291500735349268, 0.00092010718517406, 0.0020711644006343897, 0.00315441422024246, 0.00417148145472024, 0.00512922885890604, 0.00601902473420604, 0.00684514210414283, 0.0076129949214379, 0.00831719329615341, 0.008957788241517021, 0.00954140826117604, 0.0100674187024181, 0.0105216274909036, 0.0109090233566185, 0.0112305840936326, 0.0114847246480408, 0.0116672666679161, 0.0117871940275187, 0.0118454012612726, 0.0118427659448623, 0.0117725103048409, 0.0116423300960945, 0.0114541918566396, 0.0112089005934894, 0.0109072464741876, 0.0105445053758855, 0.0101255514755706, 0.00965282657701234, 0.00912705734550392, 0.00854895741144458, 0.007919227661309, 0.00723575493253608, 0.0064995369974732205, 0.00571398212531777, 0.00487973667751598, 0.00399743577399482, 0.00306770353649452, 0.00209115332560806, 0.00106838797171596, 0.0]
  const testAirfoilPoints = []
  for (let i = 0; i < 161; i++) {
    testAirfoilPoints.push(new Vector2(AIAirfoilPoint.xPoints[i], testAirfoilY[i]));
  }
  const testAirfoil = new AIAirfoilPoint(testAirfoilPoints);

  const expectX = []
  it("getTopShape正常系", () => {
    const expectY = [0, 0.0152782995046831, 0.0239181317597871, 0.031466236169147996, 0.038017157058294004, 0.0434842380832646, 0.0481372249595461, 0.0521363489996419, 0.0555987107608544, 0.0586150238997305, 0.0612516264185764, 0.0635490456495413, 0.0655594697044797, 0.0673150994961725, 0.0688314339416638, 0.0701409821700522, 0.0712619715364048, 0.0722102798015436, 0.0730000507298722, 0.0736439245086985, 0.0741532323760955, 0.0745318588578499, 0.0747931274084862, 0.074946616001144, 0.075, 0.0748585406250802, 0.0744967694911451, 0.0739699287382112, 0.07330938670701599, 0.0725463115456489, 0.0716951257268849, 0.0707681283133855, 0.0697774707510155, 0.0687310325447861, 0.0676351422541425, 0.0664933554779547, 0.0653123082283908, 0.0640962467753546, 0.0628464990285914, 0.0615662692307477, 0.0602596065358777, 0.0589254104950631, 0.0575690736547265, 0.0561891483040354, 0.0547891464345124, 0.053370207786220994, 0.051931574363904005, 0.0504767980343985, 0.0490061343062964, 0.0475185953129215, 0.0460171234462661, 0.0445022799481611, 0.0429745963160166, 0.0414397893047303, 0.039904982293444004, 0.0383701752821577, 0.0368353682708714, 0.0353005612595851, 0.0337657542482988, 0.0322309472370124, 0.0306961402257261, 0.0291613332144399, 0.0276265262031536, 0.0260917191918672, 0.0245569121805809, 0.0230221051692946, 0.0214872981580083, 0.019952491146722002, 0.0184176841354357, 0.0168828771241494, 0.0153480701128631, 0.0138132631015768, 0.0122784560902905, 0.0107436490790042, 0.00920884206771784, 0.00767403505643155, 0.00613922804514523, 0.00460442103385893, 0.00306961402257262, 0.0015348070112863, 0]

    expect(testAirfoil.getTopShape().map(point => point.y)).toEqual(expectY)
  })
  it("getBottomShape正常系", () => {
    const expectY = [0.0, -0.0075311641256898204, -0.0101577559553335, -0.012789476674030001, -0.015151462663264, -0.0169836818508325, -0.0184335444432599, -0.0195724918155013, -0.0204698785941119, -0.0211707534630331, -0.0216970417681207, -0.0220740165835365, -0.022329888983583998, -0.0224685322480135, -0.0225051349747004, -0.0224579496794411, -0.0223270832291717, -0.0221209531619641, -0.0218469341846206, -0.021511510361225, -0.0211204019006489, -0.0206726494195431, -0.0201774767999889, -0.0196379252396446, -0.0190580709087015, -0.0183417739207276, -0.0174589909798896, -0.0164618692927271, -0.0153789150787103, -0.0142386456897244, -0.013053024976885, -0.0118320684506782, -0.0105858037642451, -0.00932013265833265, -0.00804581823601797, -0.006761323677676121, -0.0054689815356982795, -0.00417149759718621, -0.00286875839571382, -0.00156997912526807, -0.000291500735349268, 0.00092010718517406, 0.0020711644006343897, 0.00315441422024246, 0.00417148145472024, 0.00512922885890604, 0.00601902473420604, 0.00684514210414283, 0.0076129949214379, 0.00831719329615341, 0.008957788241517021, 0.00954140826117604, 0.0100674187024181, 0.0105216274909036, 0.0109090233566185, 0.0112305840936326, 0.0114847246480408, 0.0116672666679161, 0.0117871940275187, 0.0118454012612726, 0.0118427659448623, 0.0117725103048409, 0.0116423300960945, 0.0114541918566396, 0.0112089005934894, 0.0109072464741876, 0.0105445053758855, 0.0101255514755706, 0.00965282657701234, 0.00912705734550392, 0.00854895741144458, 0.007919227661309, 0.00723575493253608, 0.0064995369974732205, 0.00571398212531777, 0.00487973667751598, 0.00399743577399482, 0.00306770353649452, 0.00209115332560806, 0.00106838797171596, 0.0]

    expect(testAirfoil.getBottomShape().map(point => point.y)).toEqual(expectY)
  })
})