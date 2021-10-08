import {Vsop87Element, Vsop87Group} from '../types/Vsop87Types';

const VSOP87_L0: Vsop87Element = [
    [0.87401354029],
    [0.11107659780, 3.96205090194, 213.29909543800],
    [0.01414150958, 4.58581515873, 7.11354700080],
    [0.00398379386, 0.52112025957, 206.18554843720],
    [0.00350769223, 3.30329903015, 426.59819087600],
    [0.00206816296, 0.24658366938, 103.09277421860],
    [0.00079271288, 3.84007078530, 220.41264243880],
    [0.00023990338, 4.66976934860, 110.20632121940],
    [0.00016573583, 0.43719123541, 419.48464387520],
    [0.00014906995, 5.76903283845, 316.39186965660],
    [0.00015820300, 0.93808953760, 632.78373931320],
    [0.00014609562, 1.56518573691, 3.93215326310],
    [0.00013160308, 4.44891180176, 14.22709400160],
    [0.00015053509, 2.71670027883, 639.89728631400],
    [0.00013005305, 5.98119067061, 11.04570026390],
    [0.00010725066, 3.12939596466, 202.25339517410],
    [0.00005863207, 0.23657028777, 529.69096509460],
    [0.00005227771, 4.20783162380, 3.18139373770],
    [0.00006126308, 1.76328499656, 277.03499374140],
    [0.00005019658, 3.17787919533, 433.71173787680],
    [0.00004592541, 0.61976424374, 199.07200143640],
    [0.00004005862, 2.24479893937, 63.73589830340],
    [0.00002953815, 0.98280385206, 95.97922721780],
    [0.00003873696, 3.22282692566, 138.51749687070],
    [0.00002461172, 2.03163631205, 735.87651353180],
    [0.00003269490, 0.77491895787, 949.17560896980],
    [0.00001758143, 3.26580514774, 522.57741809380],
    [0.00001640183, 5.50504966218, 846.08283475120],
    [0.00001391336, 4.02331978116, 323.50541665740],
    [0.00001580641, 4.37266314120, 309.27832265580],
    [0.00001123515, 2.83726793572, 415.55249061210],
    [0.00001017258, 3.71698151814, 227.52618943960],
    [0.00000848643, 3.19149825839, 209.36694217490],
    [0.00001087237, 4.18343232481, 2.44768055480],
    [0.00000956752, 0.50740889886, 1265.56747862640],
    [0.00000789205, 5.00745123149, 0.96320784650],
    [0.00000686965, 1.74714407827, 1052.26838318840],
    [0.00000654470, 1.59889331515, 0.04818410980],
    [0.00000748811, 2.14398149298, 853.19638175200],
];

const VSOP87_L1: Vsop87Element = [
    [213.54295595986],
    [0.01296855005, 1.82820544701, 213.29909543800],
    [0.00564347566, 2.88500136429, 7.11354700080],
    [0.00098323030, 1.08070061328, 426.59819087600],
    [0.00107678770, 2.27769911872, 206.18554843720],
    [0.00040254586, 2.04128257090, 220.41264243880],
    [0.00019941734, 1.27954662736, 103.09277421860],
    [0.00010511706, 2.74880392800, 14.22709400160],
    [0.00006939233, 0.40493079985, 639.89728631400],
    [0.00004803325, 2.44194097666, 419.48464387520],
    [0.00004056325, 2.92166618776, 110.20632121940],
    [0.00003768630, 3.64965631460, 3.93215326310],
    [0.00003384684, 2.41694251653, 3.18139373770],
    [0.00003302200, 1.26256486715, 433.71173787680],
    [0.00003071382, 2.32739317750, 199.07200143640],
    [0.00001953036, 3.56394683300, 11.04570026390],
    [0.00001249348, 2.62803737519, 95.97922721780],
    [0.00000921683, 1.96089834250, 227.52618943960],
    [0.00000705587, 4.41689249330, 529.69096509460],
    [0.00000649654, 6.17418093659, 202.25339517410],
    [0.00000627603, 6.11088227167, 309.27832265580],
];

const VSOP87_L2: Vsop87Element = [
    [0.00116441181, 1.17987850633, 7.11354700080],
    [0.00091920844, 0.07425261094, 213.29909543800],
    [0.00090592251],
    [0.00015276909, 4.06492007503, 206.18554843720],
    [0.00010631396, 0.25778277414, 220.41264243880],
    [0.00010604979, 5.40963595885, 426.59819087600],
    [0.00004265368, 1.04595556630, 14.22709400160],
    [0.00001215527, 2.91860042123, 103.09277421860],
    [0.00001164684, 4.60942128971, 639.89728631400],
    [0.00001081967, 5.69130351670, 433.71173787680],
    [0.00001020079, 0.63369182642, 3.18139373770],
];

const VSOP87_L3: Vsop87Element = [
    [0.00016038734, 5.73945377424, 7.11354700080],
    [0.00004249793, 4.58539675603, 213.29909543800],
    [0.00001906524, 4.76082050205, 220.41264243880],
    [0.00001465687, 5.91326678323, 206.18554843720],
    [0.00001162041, 5.61973132428, 14.22709400160],
    [0.00001066581, 3.60816533142, 426.59819087600],
    [0.00000239377, 3.86088273439, 433.71173787680],
    [0.00000236975, 5.76826451465, 199.07200143640],
    [0.00000165641, 5.11641150216, 3.18139373770],
];

const VSOP87_L4: Vsop87Element = [
    [0.00001661894, 3.99826248978, 7.11354700080],
    [0.00000257107, 2.98436499013, 220.41264243880],
    [0.00000236344, 3.90241428075, 14.22709400160],
    [0.00000149418, 2.74110824208, 213.29909543800],
    [0.00000109598, 1.51515739251, 206.18554843720],
    [0.00000113953, 3.14159265359],
    [0.00000068390, 1.72120953337, 426.59819087600],
    [0.00000037699, 1.23795458356, 199.07200143640],
];

const VSOP87_L5: Vsop87Element = [
    [0.00000123615, 2.25923345732, 7.11354700080],
];

const VSOP87_B0: Vsop87Element = [
    [0.04330678040, 3.60284428399, 213.29909543800],
    [0.00240348303, 2.85238489390, 426.59819087600],
    [0.00084745939],
    [0.00030863357, 3.48441504465, 220.41264243880],
    [0.00034116063, 0.57297307844, 206.18554843720],
    [0.00014734070, 2.11846597870, 639.89728631400],
    [0.00009916668, 5.79003189405, 419.48464387520],
    [0.00006993564, 4.73604689179, 7.11354700080],
    [0.00004807587, 5.43305315602, 316.39186965660],
    [0.00004788392, 4.96512927420, 110.20632121940],
    [0.00003432125, 2.73255752123, 433.71173787680],
    [0.00001506129, 6.01304536144, 103.09277421860],
    [0.00001060298, 5.63099292414, 529.69096509460],
    [0.00000969071, 5.20434966103, 632.78373931320],
    [0.00000942050, 1.39646678088, 853.19638175200],
    [0.00000707645, 3.80302329547, 323.50541665740],
    [0.00000552313, 5.13149109045, 202.25339517410],
    [0.00000399675, 3.35891413961, 227.52618943960],
    [0.00000316063, 1.99716764199, 647.01083331480],
    [0.00000319380, 3.62571550980, 209.36694217490],
    [0.00000284494, 4.88648481625, 224.34479570190],
    [0.00000314225, 0.46510272410, 217.23124870110],
    [0.00000236442, 2.13887472281, 11.04570026390],
    [0.00000215354, 5.94982610103, 846.08283475120],
    [0.00000208522, 2.12003893769, 415.55249061210],
    [0.00000178958, 2.95361514672, 63.73589830340],
    [0.00000207213, 0.73021462851, 199.07200143640],
    [0.00000139140, 1.99821990940, 735.87651353180],
    [0.00000134884, 5.24500819605, 742.99006053260],
    [0.00000140585, 0.64417620299, 490.33408917940],
    [0.00000121669, 3.11537140876, 522.57741809380],
    [0.00000139240, 4.59535168021, 14.22709400160],
    [0.00000115524, 3.10891547171, 216.48048917570],
    [0.00000114218, 0.96261442133, 210.11770170030],
    [0.00000096376, 4.48164339766, 117.31986822020],
    [0.00000080593, 1.31692750150, 277.03499374140],
    [0.00000072952, 3.05988482370, 536.80451209540],
    [0.00000069261, 4.92378633635, 309.27832265580],
    [0.00000074302, 2.89376539620, 149.56319713460],
];

const VSOP87_B1: Vsop87Element = [
    [0.00397554998, 5.33289992556, 213.29909543800],
    [0.00049478641, 3.14159265359],
    [0.00018571607, 6.09919206378, 426.59819087600],
    [0.00014800587, 2.30586060520, 206.18554843720],
    [0.00009643981, 1.69674660120, 220.41264243880],
    [0.00003757161, 1.25429514018, 419.48464387520],
    [0.00002716647, 5.91166664787, 639.89728631400],
    [0.00001455309, 0.85161616532, 433.71173787680],
    [0.00001290595, 2.91770857090, 7.11354700080],
    [0.00000852630, 0.43572078997, 316.39186965660],
    [0.00000284386, 1.61881754773, 227.52618943960],
    [0.00000292185, 5.31574251270, 853.19638175200],
    [0.00000275090, 3.88864137336, 103.09277421860],
    [0.00000297726, 0.91909206723, 632.78373931320],
    [0.00000172359, 0.05215146556, 647.01083331480],
    [0.00000127731, 1.20711452525, 529.69096509460],
    [0.00000166237, 2.44351613165, 199.07200143640],
    [0.00000158220, 5.20850125766, 110.20632121940],
    [0.00000109839, 2.45695551627, 217.23124870110],
    [0.00000081759, 2.75839171353, 210.11770170030],
    [0.00000081010, 2.86038377187, 14.22709400160],
];

const VSOP87_B2: Vsop87Element = [
    [0.00020629977, 0.50482422817, 213.29909543800],
    [0.00003719555, 3.99833475829, 206.18554843720],
    [0.00001627158, 6.18189939500, 220.41264243880],
    [0.00001346067],
    [0.00000705842, 3.03914308836, 419.48464387520],
    [0.00000365042, 5.09928680706, 426.59819087600],
    [0.00000329632, 5.27899210039, 433.71173787680],
    [0.00000219335, 3.82841533795, 639.89728631400],
    [0.00000139393, 1.04272623499, 7.11354700080],
    [0.00000103980, 6.15730992966, 227.52618943960],
    [0.00000092961, 1.97994412845, 316.39186965660],
];

const VSOP87_B3: Vsop87Element = [
    [0.00000666252, 1.99006340181, 213.29909543800],
    [0.00000632350, 5.69778316807, 206.18554843720],
    [0.00000398051],
    [0.00000187838, 4.33779804809, 220.41264243880],
    [0.00000091884, 4.84104208217, 419.48464387520],
    [0.00000042369, 2.38073239056, 426.59819087600],
    [0.00000051548, 3.42149490328, 433.71173787680],
    [0.00000025661, 4.40167213109, 227.52618943960],
    [0.00000020551, 5.85313509872, 199.07200143640],
];

const VSOP87_B4: Vsop87Element = [
    [0.00000080384, 1.11918414679, 206.18554843720],
    [0.00000031660, 3.12218745098, 213.29909543800],
    [0.00000017143, 2.48073200414, 220.41264243880],
    [0.00000011844, 3.14159265359],
    [0.00000009005, 0.38441424927, 419.48464387520],
    [0.00000006164, 1.56186379537, 433.71173787680],
    [0.00000004660, 1.28235639570, 199.07200143640],
    [0.00000004775, 2.63498295487, 227.52618943960],
];

const VSOP87_B5: Vsop87Element = [
    [0.00000007895, 2.81927558645, 206.18554843720],
];

const VSOP87_R0: Vsop87Element = [
    [9.55758135801],
    [0.52921382465, 2.39226219733, 213.29909543800],
    [0.01873679934, 5.23549605091, 206.18554843720],
    [0.01464663959, 1.64763045468, 426.59819087600],
    [0.00821891059, 5.93520025371, 316.39186965660],
    [0.00547506899, 5.01532628454, 103.09277421860],
    [0.00371684449, 2.27114833428, 220.41264243880],
    [0.00361778433, 3.13904303264, 7.11354700080],
    [0.00140617548, 5.70406652991, 632.78373931320],
    [0.00108974737, 3.29313595577, 110.20632121940],
    [0.00069007015, 5.94099622447, 419.48464387520],
    [0.00061053350, 0.94037761156, 639.89728631400],
    [0.00048913044, 1.55733388472, 202.25339517410],
    [0.00034143794, 0.19518550682, 277.03499374140],
    [0.00032401718, 5.47084606947, 949.17560896980],
    [0.00020936573, 0.46349163993, 735.87651353180],
    [0.00020839118, 1.52102590640, 433.71173787680],
    [0.00020746678, 5.33255667599, 199.07200143640],
    [0.00015298457, 3.05943652881, 529.69096509460],
    [0.00014296479, 2.60433537909, 323.50541665740],
    [0.00011993314, 5.98051421881, 846.08283475120],
    [0.00011380261, 1.73105746566, 522.57741809380],
    [0.00012884128, 1.64892310393, 138.51749687070],
    [0.00007752769, 5.85191318903, 95.97922721780],
    [0.00009796061, 5.20475863996, 1265.56747862640],
    [0.00006465967, 0.17733160145, 1052.26838318840],
    [0.00006770621, 3.00433479284, 14.22709400160],
    [0.00005850443, 1.45519636076, 415.55249061210],
    [0.00005307481, 0.59737534050, 63.73589830340],
    [0.00004695746, 2.14919036956, 227.52618943960],
    [0.00004043988, 1.64010323863, 209.36694217490],
    [0.00003688132, 0.78016133170, 412.37109687440],
    [0.00003376457, 3.69528478828, 224.34479570190],
    [0.00002885348, 1.38764077631, 838.96928775040],
    [0.00002976033, 5.68467931117, 210.11770170030],
    [0.00003419551, 4.94549148887, 1581.95934828300],
    [0.00003460943, 1.85088802878, 175.16605980020],
    [0.00003400616, 0.55386747515, 350.33211960040],
    [0.00002507630, 3.53851863255, 742.99006053260],
];

const VSOP87_R1: Vsop87Element = [
    [0.06182981282, 0.25843515034, 213.29909543800],
    [0.00506577574, 0.71114650941, 206.18554843720],
    [0.00341394136, 5.79635773960, 426.59819087600],
    [0.00188491375, 0.47215719444, 220.41264243880],
    [0.00186261540, 3.14159265359],
    [0.00143891176, 1.40744864239, 7.11354700080],
    [0.00049621111, 6.01744469580, 103.09277421860],
    [0.00020928189, 5.09245654470, 639.89728631400],
    [0.00019952612, 1.17560125007, 419.48464387520],
    [0.00018839639, 1.60819563173, 110.20632121940],
    [0.00012892827, 5.94330258435, 433.71173787680],
    [0.00013876565, 0.75886204364, 199.07200143640],
    [0.00005396699, 1.28852405908, 14.22709400160],
    [0.00004869308, 0.86793894213, 323.50541665740],
    [0.00004247455, 0.39299384543, 227.52618943960],
    [0.00003252084, 1.25853470491, 95.97922721780],
    [0.00002856006, 2.16731405366, 735.87651353180],
    [0.00002909411, 4.60679154788, 202.25339517410],
    [0.00003081408, 3.43662557418, 522.57741809380],
    [0.00001987689, 2.45054204795, 412.37109687440],
    [0.00001941309, 6.02393385142, 209.36694217490],
];

const VSOP87_R2: Vsop87Element = [
    [0.00436902464, 4.78671673044, 213.29909543800],
    [0.00071922760, 2.50069994874, 206.18554843720],
    [0.00049766792, 4.97168150870, 220.41264243880],
    [0.00043220894, 3.86940443794, 426.59819087600],
    [0.00029645554, 5.96310264282, 7.11354700080],
    [0.00004141650, 4.10670940823, 433.71173787680],
    [0.00004720909, 2.47527992423, 199.07200143640],
    [0.00003789370, 3.09771025067, 639.89728631400],
    [0.00002963990, 1.37206248846, 103.09277421860],
    [0.00002556363, 2.85065721526, 419.48464387520],
    [0.00002208457, 6.27588858707, 110.20632121940],
];

const VSOP87_R3: Vsop87Element = [
    [0.00020315005, 3.02186626038, 213.29909543800],
    [0.00008923581, 3.19144205755, 220.41264243880],
    [0.00006908677, 4.35174889353, 206.18554843720],
    [0.00004087129, 4.22406927376, 7.11354700080],
    [0.00003879041, 2.01056445995, 426.59819087600],
    [0.00001070788, 4.20360341236, 199.07200143640],
    [0.00000907332, 2.28344368029, 433.71173787680],
    [0.00000606121, 3.17458570534, 227.52618943960],
    [0.00000596639, 4.13455753351, 14.22709400160],
];

const VSOP87_R4: Vsop87Element = [
    [0.00001202050, 1.41499446465, 220.41264243880],
    [0.00000707796, 1.16153570102, 213.29909543800],
    [0.00000516121, 6.23973568330, 206.18554843720],
    [0.00000426664, 2.46924890293, 7.11354700080],
    [0.00000267736, 0.18659206741, 426.59819087600],
    [0.00000170171, 5.95926972384, 199.07200143640],
    [0.00000145113, 1.44211060143, 227.52618943960],
    [0.00000150339, 0.47970167140, 433.71173787680],
];

const VSOP87_R5: Vsop87Element = [
    [0.00000128612, 5.91282565136, 220.41264243880],
];

export const VSOP87_X: Vsop87Group = [
    VSOP87_L0,
    VSOP87_L1,
    VSOP87_L2,
    VSOP87_L3,
    VSOP87_L4,
    VSOP87_L5,
];

export const VSOP87_Y: Vsop87Group = [
    VSOP87_B0,
    VSOP87_B1,
    VSOP87_B2,
    VSOP87_B3,
    VSOP87_B4,
    VSOP87_B5,
];

export const VSOP87_Z: Vsop87Group = [
    VSOP87_R0,
    VSOP87_R1,
    VSOP87_R2,
    VSOP87_R3,
    VSOP87_R4,
    VSOP87_R5,
];