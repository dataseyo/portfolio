import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh
    Plane005: THREE.Mesh
    Plane006: THREE.Mesh
    Plane007: THREE.Mesh
    Plane008: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
    Plane011: THREE.Mesh
    Plane012: THREE.Mesh
    Plane013: THREE.Mesh
    Plane014: THREE.Mesh
    Plane015: THREE.Mesh
    Plane016: THREE.Mesh
    Plane017: THREE.Mesh
    Plane018: THREE.Mesh
    Plane019: THREE.Mesh
    Plane020: THREE.Mesh
    Plane021: THREE.Mesh
    Plane022: THREE.Mesh
    Plane023: THREE.Mesh
    Plane024: THREE.Mesh
    Plane025: THREE.Mesh
    Plane026: THREE.Mesh
    Plane027: THREE.Mesh
    Plane028: THREE.Mesh
    Plane029: THREE.Mesh
    Plane030: THREE.Mesh
    Plane031: THREE.Mesh
    Plane032: THREE.Mesh
    Plane033: THREE.Mesh
    Plane034: THREE.Mesh
    Plane035: THREE.Mesh
    Plane036: THREE.Mesh
    Plane037: THREE.Mesh
    Plane038: THREE.Mesh
    Plane039: THREE.Mesh
    Plane040: THREE.Mesh
    Plane041: THREE.Mesh
    Plane042: THREE.Mesh
    Plane043: THREE.Mesh
    Plane044: THREE.Mesh
    Plane045: THREE.Mesh
    Plane046: THREE.Mesh
    Plane047: THREE.Mesh
    Plane048: THREE.Mesh
    Plane049: THREE.Mesh
    Plane050: THREE.Mesh
    Plane051: THREE.Mesh
    Plane052: THREE.Mesh
    Plane053: THREE.Mesh
    Plane054: THREE.Mesh
    Plane055: THREE.Mesh
    Plane056: THREE.Mesh
    Plane057: THREE.Mesh
    Plane058: THREE.Mesh
    Plane059: THREE.Mesh
    Plane060: THREE.Mesh
    Plane061: THREE.Mesh
    Plane062: THREE.Mesh
    Plane063: THREE.Mesh
    Plane064: THREE.Mesh
    Plane065: THREE.Mesh
    Plane066: THREE.Mesh
    Plane067: THREE.Mesh
    Plane068: THREE.Mesh
    Plane069: THREE.Mesh
    Plane070: THREE.Mesh
    Plane071: THREE.Mesh
    Plane072: THREE.Mesh
    Plane073: THREE.Mesh
    Plane074: THREE.Mesh
    Plane075: THREE.Mesh
    Plane076: THREE.Mesh
    Plane077: THREE.Mesh
    Plane078: THREE.Mesh
    Plane079: THREE.Mesh
    Plane080: THREE.Mesh
    Plane081: THREE.Mesh
    Plane082: THREE.Mesh
    Plane083: THREE.Mesh
    Plane084: THREE.Mesh
    Plane085: THREE.Mesh
    Plane086: THREE.Mesh
    Plane087: THREE.Mesh
    Plane088: THREE.Mesh
    Plane089: THREE.Mesh
    Plane090: THREE.Mesh
    Plane091: THREE.Mesh
    Plane092: THREE.Mesh
    Plane093: THREE.Mesh
    Plane094: THREE.Mesh
    Plane095: THREE.Mesh
    Plane096: THREE.Mesh
    Plane097: THREE.Mesh
    Plane098: THREE.Mesh
    Plane099: THREE.Mesh
    Plane100: THREE.Mesh
    Plane101: THREE.Mesh
    Plane102: THREE.Mesh
    Plane103: THREE.Mesh
    Plane104: THREE.Mesh
    Plane105: THREE.Mesh
    Plane106: THREE.Mesh
    Plane107: THREE.Mesh
    Plane108: THREE.Mesh
    Plane109: THREE.Mesh
    Plane110: THREE.Mesh
    Plane111: THREE.Mesh
    Plane112: THREE.Mesh
    Plane113: THREE.Mesh
    Plane114: THREE.Mesh
    Plane115: THREE.Mesh
    Plane116: THREE.Mesh
    Plane117: THREE.Mesh
    Plane118: THREE.Mesh
    Plane119: THREE.Mesh
    Plane120: THREE.Mesh
    Plane121: THREE.Mesh
    Plane122: THREE.Mesh
    Plane123: THREE.Mesh
    Plane124: THREE.Mesh
    Plane125: THREE.Mesh
    Plane126: THREE.Mesh
    Plane127: THREE.Mesh
    Plane128: THREE.Mesh
    Plane129: THREE.Mesh
    Plane130: THREE.Mesh
    Plane131: THREE.Mesh
    Plane132: THREE.Mesh
    Plane133: THREE.Mesh
    Plane134: THREE.Mesh
    Plane135: THREE.Mesh
    Plane136: THREE.Mesh
    Plane137: THREE.Mesh
    Plane138: THREE.Mesh
    Plane139: THREE.Mesh
    Plane140: THREE.Mesh
    Plane141: THREE.Mesh
    Plane142: THREE.Mesh
    Plane143: THREE.Mesh
    Plane144: THREE.Mesh
    Plane145: THREE.Mesh
    Plane146: THREE.Mesh
    Plane147: THREE.Mesh
    Plane148: THREE.Mesh
    Plane149: THREE.Mesh
    Plane150: THREE.Mesh
    Plane151: THREE.Mesh
    Plane152: THREE.Mesh
    Plane153: THREE.Mesh
    Plane154: THREE.Mesh
    Plane155: THREE.Mesh
    Plane156: THREE.Mesh
    Plane157: THREE.Mesh
    Plane158: THREE.Mesh
    Plane159: THREE.Mesh
    Plane160: THREE.Mesh
    Plane161: THREE.Mesh
    Plane162: THREE.Mesh
    Plane163: THREE.Mesh
    Plane164: THREE.Mesh
    Plane165: THREE.Mesh
    Plane166: THREE.Mesh
    Plane167: THREE.Mesh
    Plane168: THREE.Mesh
    Plane169: THREE.Mesh
    Plane170: THREE.Mesh
    Plane171: THREE.Mesh
    Plane172: THREE.Mesh
    Plane173: THREE.Mesh
    Plane174: THREE.Mesh
    Plane175: THREE.Mesh
    Plane176: THREE.Mesh
    Plane177: THREE.Mesh
    Plane178: THREE.Mesh
    Plane179: THREE.Mesh
    Plane180: THREE.Mesh
    Plane181: THREE.Mesh
    Plane182: THREE.Mesh
    Plane183: THREE.Mesh
    Plane184: THREE.Mesh
    Plane185: THREE.Mesh
    Plane186: THREE.Mesh
    Plane187: THREE.Mesh
    Plane188: THREE.Mesh
    Plane189: THREE.Mesh
    Plane190: THREE.Mesh
    Plane191: THREE.Mesh
    Plane192: THREE.Mesh
    Plane193: THREE.Mesh
    Plane194: THREE.Mesh
    Plane195: THREE.Mesh
    Plane196: THREE.Mesh
    Plane197: THREE.Mesh
    Plane198: THREE.Mesh
    Plane199: THREE.Mesh
    Plane200: THREE.Mesh
    Plane201: THREE.Mesh
    Plane202: THREE.Mesh
    Plane203: THREE.Mesh
    Plane204: THREE.Mesh
    Plane205: THREE.Mesh
    Plane206: THREE.Mesh
    Plane207: THREE.Mesh
    Plane208: THREE.Mesh
    Plane209: THREE.Mesh
    Plane210: THREE.Mesh
    Plane211: THREE.Mesh
    Plane212: THREE.Mesh
    Plane213: THREE.Mesh
    Plane214: THREE.Mesh
    Plane215: THREE.Mesh
    Plane216: THREE.Mesh
    Plane217: THREE.Mesh
    Plane218: THREE.Mesh
    Plane219: THREE.Mesh
    Plane220: THREE.Mesh
    Plane221: THREE.Mesh
    Plane222: THREE.Mesh
    Plane223: THREE.Mesh
    Plane224: THREE.Mesh
    Plane225: THREE.Mesh
    Plane226: THREE.Mesh
    Plane227: THREE.Mesh
    Plane228: THREE.Mesh
    Plane229: THREE.Mesh
    Plane230: THREE.Mesh
    Plane231: THREE.Mesh
    Plane232: THREE.Mesh
    Plane233: THREE.Mesh
    Plane234: THREE.Mesh
    Plane235: THREE.Mesh
    Plane236: THREE.Mesh
    Plane237: THREE.Mesh
    Plane238: THREE.Mesh
    Plane239: THREE.Mesh
    Plane240: THREE.Mesh
    Plane241: THREE.Mesh
    Plane242: THREE.Mesh
    Plane243: THREE.Mesh
    Plane244: THREE.Mesh
    Plane245: THREE.Mesh
    Plane246: THREE.Mesh
    Plane247: THREE.Mesh
    Plane248: THREE.Mesh
    Plane249: THREE.Mesh
    Plane250: THREE.Mesh
    Plane251: THREE.Mesh
    Plane252: THREE.Mesh
    Plane253: THREE.Mesh
    Plane254: THREE.Mesh
    Plane255: THREE.Mesh
    Plane256: THREE.Mesh
    Plane257: THREE.Mesh
    Plane258: THREE.Mesh
    Plane259: THREE.Mesh
    Plane260: THREE.Mesh
    Plane261: THREE.Mesh
    Plane262: THREE.Mesh
    Plane263: THREE.Mesh
    Plane264: THREE.Mesh
    Plane265: THREE.Mesh
    Plane266: THREE.Mesh
    Plane267: THREE.Mesh
    Plane268: THREE.Mesh
    Plane269: THREE.Mesh
    Plane270: THREE.Mesh
    Plane271: THREE.Mesh
    Plane272: THREE.Mesh
    Plane273: THREE.Mesh
    Plane274: THREE.Mesh
    Plane275: THREE.Mesh
    Plane276: THREE.Mesh
    Plane277: THREE.Mesh
    Plane278: THREE.Mesh
    Plane279: THREE.Mesh
    Plane280: THREE.Mesh
    Plane281: THREE.Mesh
    Plane282: THREE.Mesh
    Plane283: THREE.Mesh
    Plane284: THREE.Mesh
    Plane285: THREE.Mesh
    Plane286: THREE.Mesh
    Plane287: THREE.Mesh
    Plane288: THREE.Mesh
    Plane289: THREE.Mesh
    Plane290: THREE.Mesh
    Plane291: THREE.Mesh
    Plane292: THREE.Mesh
    Plane293: THREE.Mesh
    Plane294: THREE.Mesh
    Plane295: THREE.Mesh
    Plane296: THREE.Mesh
    Plane297: THREE.Mesh
    Plane298: THREE.Mesh
    Plane299: THREE.Mesh
    Plane300: THREE.Mesh
    Plane301: THREE.Mesh
    Plane302: THREE.Mesh
    Plane303: THREE.Mesh
    Plane304: THREE.Mesh
    Plane305: THREE.Mesh
    Plane306: THREE.Mesh
    Plane307: THREE.Mesh
    Plane308: THREE.Mesh
    Plane309: THREE.Mesh
    Plane310: THREE.Mesh
    Plane311: THREE.Mesh
    Plane312: THREE.Mesh
    Plane313: THREE.Mesh
    Plane314: THREE.Mesh
    Plane315: THREE.Mesh
    Plane316: THREE.Mesh
    Plane317: THREE.Mesh
    Plane318: THREE.Mesh
    Plane319: THREE.Mesh
    Plane320: THREE.Mesh
    Plane321: THREE.Mesh
    Plane322: THREE.Mesh
    Plane323: THREE.Mesh
    Plane324: THREE.Mesh
    Plane325: THREE.Mesh
    Plane326: THREE.Mesh
    Plane327: THREE.Mesh
    Plane328: THREE.Mesh
    Plane329: THREE.Mesh
    Plane330: THREE.Mesh
    Plane331: THREE.Mesh
    Plane332: THREE.Mesh
    Plane333: THREE.Mesh
    Plane334: THREE.Mesh
    Plane335: THREE.Mesh
    Plane336: THREE.Mesh
    Plane337: THREE.Mesh
    Plane338: THREE.Mesh
    Plane339: THREE.Mesh
    Plane340: THREE.Mesh
    Plane341: THREE.Mesh
    Plane342: THREE.Mesh
    Plane343: THREE.Mesh
    Plane344: THREE.Mesh
    Plane345: THREE.Mesh
    Plane346: THREE.Mesh
    Plane347: THREE.Mesh
    Plane348: THREE.Mesh
    Plane349: THREE.Mesh
    Plane350: THREE.Mesh
    Plane351: THREE.Mesh
    Plane352: THREE.Mesh
    Plane353: THREE.Mesh
    Plane354: THREE.Mesh
    Plane355: THREE.Mesh
    Plane356: THREE.Mesh
    Plane357: THREE.Mesh
    Plane358: THREE.Mesh
    Plane359: THREE.Mesh
    Plane360: THREE.Mesh
    Plane361: THREE.Mesh
    Plane362: THREE.Mesh
    Plane363: THREE.Mesh
    Plane364: THREE.Mesh
    Plane365: THREE.Mesh
    Plane366: THREE.Mesh
    Plane367: THREE.Mesh
    Plane368: THREE.Mesh
    Plane369: THREE.Mesh
    Plane370: THREE.Mesh
    Plane371: THREE.Mesh
    Plane372: THREE.Mesh
    Plane373: THREE.Mesh
    Plane374: THREE.Mesh
    Plane375: THREE.Mesh
    Plane376: THREE.Mesh
    Plane377: THREE.Mesh
    Plane378: THREE.Mesh
    Plane379: THREE.Mesh
    Plane380: THREE.Mesh
    Plane381: THREE.Mesh
    Plane382: THREE.Mesh
    Plane383: THREE.Mesh
    Plane384: THREE.Mesh
    Plane385: THREE.Mesh
    Plane386: THREE.Mesh
    Plane387: THREE.Mesh
    Plane388: THREE.Mesh
    Plane389: THREE.Mesh
    Plane390: THREE.Mesh
    Plane391: THREE.Mesh
    Plane392: THREE.Mesh
    Plane393: THREE.Mesh
    Plane394: THREE.Mesh
    Plane395: THREE.Mesh
    Plane396: THREE.Mesh
    Plane397: THREE.Mesh
    Plane398: THREE.Mesh
    Plane399: THREE.Mesh
    Plane400: THREE.Mesh
    Plane401: THREE.Mesh
    Plane402: THREE.Mesh
    Plane403: THREE.Mesh
    Plane404: THREE.Mesh
    Plane405: THREE.Mesh
    Plane406: THREE.Mesh
    Plane407: THREE.Mesh
    Plane408: THREE.Mesh
    Plane409: THREE.Mesh
    Plane410: THREE.Mesh
    Plane411: THREE.Mesh
    Plane412: THREE.Mesh
    Plane413: THREE.Mesh
    Plane414: THREE.Mesh
    Plane415: THREE.Mesh
    Plane416: THREE.Mesh
    Plane417: THREE.Mesh
    Plane418: THREE.Mesh
    Plane419: THREE.Mesh
    Plane420: THREE.Mesh
    Plane421: THREE.Mesh
    Plane422: THREE.Mesh
    Plane423: THREE.Mesh
    Plane424: THREE.Mesh
    Plane425: THREE.Mesh
    Plane426: THREE.Mesh
    Plane427: THREE.Mesh
    Plane428: THREE.Mesh
    Plane429: THREE.Mesh
    Plane430: THREE.Mesh
    Plane431: THREE.Mesh
    Plane432: THREE.Mesh
    Plane433: THREE.Mesh
    Plane434: THREE.Mesh
    Plane435: THREE.Mesh
    Plane436: THREE.Mesh
    Plane437: THREE.Mesh
    Plane438: THREE.Mesh
    Plane439: THREE.Mesh
    Plane440: THREE.Mesh
    Plane441: THREE.Mesh
    Plane442: THREE.Mesh
    Plane443: THREE.Mesh
    Plane444: THREE.Mesh
    Plane445: THREE.Mesh
    Plane446: THREE.Mesh
    Plane447: THREE.Mesh
    Plane448: THREE.Mesh
    Plane449: THREE.Mesh
    Plane450: THREE.Mesh
    Plane451: THREE.Mesh
    Plane452: THREE.Mesh
    Plane453: THREE.Mesh
    Plane454: THREE.Mesh
    Plane455: THREE.Mesh
    Plane456: THREE.Mesh
    Plane457: THREE.Mesh
    Plane458: THREE.Mesh
    Plane459: THREE.Mesh
    Plane460: THREE.Mesh
    Plane461: THREE.Mesh
    Plane462: THREE.Mesh
    Plane463: THREE.Mesh
    Plane464: THREE.Mesh
    Plane465: THREE.Mesh
    Plane466: THREE.Mesh
    Plane467: THREE.Mesh
    Plane468: THREE.Mesh
    Plane469: THREE.Mesh
    Plane470: THREE.Mesh
    Plane471: THREE.Mesh
    Plane472: THREE.Mesh
    Plane473: THREE.Mesh
    Plane474: THREE.Mesh
    Plane475: THREE.Mesh
    Plane476: THREE.Mesh
    Plane477: THREE.Mesh
    Plane478: THREE.Mesh
    Plane479: THREE.Mesh
    Plane480: THREE.Mesh
    Plane481: THREE.Mesh
    Plane482: THREE.Mesh
    Plane483: THREE.Mesh
    Plane484: THREE.Mesh
    Plane485: THREE.Mesh
    Plane486: THREE.Mesh
    Plane487: THREE.Mesh
    Plane488: THREE.Mesh
    Plane489: THREE.Mesh
    Plane490: THREE.Mesh
    Plane491: THREE.Mesh
    Plane492: THREE.Mesh
    Plane493: THREE.Mesh
    Plane494: THREE.Mesh
    Plane495: THREE.Mesh
    Plane496: THREE.Mesh
    Plane497: THREE.Mesh
    Plane498: THREE.Mesh
    Plane499: THREE.Mesh
    Plane500: THREE.Mesh
    Plane501: THREE.Mesh
    Plane502: THREE.Mesh
    Plane503: THREE.Mesh
    Plane504: THREE.Mesh
    Plane505: THREE.Mesh
    Plane506: THREE.Mesh
    Plane507: THREE.Mesh
    Plane508: THREE.Mesh
    Plane509: THREE.Mesh
    Plane510: THREE.Mesh
    Plane511: THREE.Mesh
    Plane512: THREE.Mesh
    Plane513: THREE.Mesh
    Plane514: THREE.Mesh
    Plane515: THREE.Mesh
    Plane516: THREE.Mesh
    Plane517: THREE.Mesh
    Plane518: THREE.Mesh
    Plane519: THREE.Mesh
    Plane520: THREE.Mesh
    Plane521: THREE.Mesh
    Plane522: THREE.Mesh
    Plane523: THREE.Mesh
    Plane524: THREE.Mesh
    Plane525: THREE.Mesh
    Plane526: THREE.Mesh
    Plane527: THREE.Mesh
    Plane528: THREE.Mesh
    Plane529: THREE.Mesh
    Plane530: THREE.Mesh
    Plane531: THREE.Mesh
    Plane532: THREE.Mesh
    Plane533: THREE.Mesh
    Plane534: THREE.Mesh
    Plane535: THREE.Mesh
    Plane536: THREE.Mesh
    Plane537: THREE.Mesh
    Plane538: THREE.Mesh
    Plane539: THREE.Mesh
    Plane540: THREE.Mesh
    Plane541: THREE.Mesh
    Plane542: THREE.Mesh
    Plane543: THREE.Mesh
    Plane544: THREE.Mesh
    Plane545: THREE.Mesh
    Plane546: THREE.Mesh
    Plane547: THREE.Mesh
    Plane548: THREE.Mesh
    Plane549: THREE.Mesh
    Plane550: THREE.Mesh
    Plane551: THREE.Mesh
    Plane552: THREE.Mesh
    Plane553: THREE.Mesh
    Plane554: THREE.Mesh
    Plane555: THREE.Mesh
    Plane556: THREE.Mesh
    Plane557: THREE.Mesh
    Plane558: THREE.Mesh
    Plane559: THREE.Mesh
    Plane560: THREE.Mesh
    Plane561: THREE.Mesh
    Plane562: THREE.Mesh
    Plane563: THREE.Mesh
    Plane564: THREE.Mesh
    Plane565: THREE.Mesh
    Plane566: THREE.Mesh
    Plane567: THREE.Mesh
    Plane568: THREE.Mesh
    Plane569: THREE.Mesh
    Plane570: THREE.Mesh
    Plane571: THREE.Mesh
    Plane572: THREE.Mesh
    Plane573: THREE.Mesh
    Plane574: THREE.Mesh
    Plane575: THREE.Mesh
    Plane576: THREE.Mesh
    Plane577: THREE.Mesh
    Plane578: THREE.Mesh
    Plane579: THREE.Mesh
    Plane580: THREE.Mesh
    Plane581: THREE.Mesh
    Plane582: THREE.Mesh
    Plane583: THREE.Mesh
    Plane584: THREE.Mesh
    Plane585: THREE.Mesh
    Plane586: THREE.Mesh
    Plane587: THREE.Mesh
    Plane588: THREE.Mesh
    Plane589: THREE.Mesh
    Plane590: THREE.Mesh
    Plane591: THREE.Mesh
    Plane592: THREE.Mesh
    Plane593: THREE.Mesh
    Plane594: THREE.Mesh
    Plane595: THREE.Mesh
    Plane596: THREE.Mesh
    Plane597: THREE.Mesh
    Plane598: THREE.Mesh
    Plane599: THREE.Mesh
    Plane600: THREE.Mesh
    Plane601: THREE.Mesh
    Plane602: THREE.Mesh
    Plane603: THREE.Mesh
    Plane604: THREE.Mesh
    Plane605: THREE.Mesh
    Plane606: THREE.Mesh
    Plane607: THREE.Mesh
    Plane608: THREE.Mesh
    Plane609: THREE.Mesh
    Plane610: THREE.Mesh
    Plane611: THREE.Mesh
    Plane612: THREE.Mesh
    Plane613: THREE.Mesh
    Plane614: THREE.Mesh
    Plane615: THREE.Mesh
    Plane616: THREE.Mesh
    Plane617: THREE.Mesh
    Plane618: THREE.Mesh
    Plane619: THREE.Mesh
    Plane620: THREE.Mesh
    Plane621: THREE.Mesh
    Plane622: THREE.Mesh
    Plane623: THREE.Mesh
    Plane624: THREE.Mesh
    Plane625: THREE.Mesh
    Plane626: THREE.Mesh
    Plane627: THREE.Mesh
    Plane628: THREE.Mesh
    Plane629: THREE.Mesh
    Plane630: THREE.Mesh
    Plane631: THREE.Mesh
    Plane632: THREE.Mesh
    Plane633: THREE.Mesh
    Plane634: THREE.Mesh
    Plane635: THREE.Mesh
    Plane636: THREE.Mesh
    Plane637: THREE.Mesh
    Plane638: THREE.Mesh
    Plane639: THREE.Mesh
    Plane640: THREE.Mesh
    Plane641: THREE.Mesh
    Plane642: THREE.Mesh
    Plane643: THREE.Mesh
    Plane644: THREE.Mesh
    Plane645: THREE.Mesh
    Plane646: THREE.Mesh
    Plane647: THREE.Mesh
    Plane648: THREE.Mesh
    Plane649: THREE.Mesh
    Plane650: THREE.Mesh
    Plane651: THREE.Mesh
    Plane652: THREE.Mesh
    Plane653: THREE.Mesh
    Plane654: THREE.Mesh
    Plane655: THREE.Mesh
    Plane656: THREE.Mesh
    Plane657: THREE.Mesh
    Plane658: THREE.Mesh
    Plane659: THREE.Mesh
    Plane660: THREE.Mesh
    Plane661: THREE.Mesh
    Plane662: THREE.Mesh
    Plane663: THREE.Mesh
    Plane664: THREE.Mesh
    Plane665: THREE.Mesh
    Plane666: THREE.Mesh
    Plane667: THREE.Mesh
    Plane668: THREE.Mesh
    Plane669: THREE.Mesh
    Plane670: THREE.Mesh
    Plane671: THREE.Mesh
    Plane672: THREE.Mesh
    Plane673: THREE.Mesh
    Plane674: THREE.Mesh
    Plane675: THREE.Mesh
    Plane676: THREE.Mesh
    Plane677: THREE.Mesh
    Plane678: THREE.Mesh
    Plane679: THREE.Mesh
    Plane680: THREE.Mesh
    Plane681: THREE.Mesh
    Plane682: THREE.Mesh
    Plane683: THREE.Mesh
    Plane684: THREE.Mesh
    Plane685: THREE.Mesh
    Plane686: THREE.Mesh
    Plane687: THREE.Mesh
    Plane688: THREE.Mesh
    Plane689: THREE.Mesh
    Plane690: THREE.Mesh
    Plane691: THREE.Mesh
    Plane692: THREE.Mesh
    Plane693: THREE.Mesh
    Plane694: THREE.Mesh
    Plane695: THREE.Mesh
    Plane696: THREE.Mesh
    Plane697: THREE.Mesh
    Plane698: THREE.Mesh
    Plane699: THREE.Mesh
    Plane700: THREE.Mesh
    Plane701: THREE.Mesh
    Plane702: THREE.Mesh
    Plane703: THREE.Mesh
    Plane704: THREE.Mesh
    Plane705: THREE.Mesh
    Plane706: THREE.Mesh
    Plane707: THREE.Mesh
    Plane708: THREE.Mesh
    Plane709: THREE.Mesh
    Plane710: THREE.Mesh
    Plane711: THREE.Mesh
    Plane712: THREE.Mesh
    Plane713: THREE.Mesh
    Plane714: THREE.Mesh
    Plane715: THREE.Mesh
    Plane716: THREE.Mesh
    Plane717: THREE.Mesh
    Plane718: THREE.Mesh
    Plane719: THREE.Mesh
    Plane720: THREE.Mesh
    Plane721: THREE.Mesh
    Plane722: THREE.Mesh
    Plane723: THREE.Mesh
    Plane724: THREE.Mesh
    Plane725: THREE.Mesh
    Plane726: THREE.Mesh
    Plane727: THREE.Mesh
    Plane728: THREE.Mesh
    Plane729: THREE.Mesh
    Plane730: THREE.Mesh
    Plane731: THREE.Mesh
    Plane732: THREE.Mesh
    Plane733: THREE.Mesh
    Plane734: THREE.Mesh
    Plane735: THREE.Mesh
    Plane736: THREE.Mesh
    Plane737: THREE.Mesh
    Plane738: THREE.Mesh
    Plane739: THREE.Mesh
    Plane740: THREE.Mesh
    Plane741: THREE.Mesh
    Plane742: THREE.Mesh
    Plane743: THREE.Mesh
    Plane744: THREE.Mesh
    Plane745: THREE.Mesh
    Plane746: THREE.Mesh
    Plane747: THREE.Mesh
    Plane748: THREE.Mesh
    Plane749: THREE.Mesh
    Plane750: THREE.Mesh
    Plane751: THREE.Mesh
    Plane752: THREE.Mesh
    Plane753: THREE.Mesh
    Plane754: THREE.Mesh
    Plane755: THREE.Mesh
    Plane756: THREE.Mesh
    Plane757: THREE.Mesh
    Plane758: THREE.Mesh
    Plane759: THREE.Mesh
    Plane760: THREE.Mesh
    Plane761: THREE.Mesh
    Plane762: THREE.Mesh
    Plane763: THREE.Mesh
    Plane764: THREE.Mesh
    Plane765: THREE.Mesh
    Plane766: THREE.Mesh
    Plane767: THREE.Mesh
    Plane768: THREE.Mesh
    Plane769: THREE.Mesh
    Plane770: THREE.Mesh
    Plane771: THREE.Mesh
    Plane772: THREE.Mesh
    Plane773: THREE.Mesh
    Plane774: THREE.Mesh
    Plane775: THREE.Mesh
    Plane776: THREE.Mesh
    Plane777: THREE.Mesh
    Plane778: THREE.Mesh
    Plane779: THREE.Mesh
    Plane780: THREE.Mesh
    Plane781: THREE.Mesh
    Plane782: THREE.Mesh
    Plane783: THREE.Mesh
    Plane784: THREE.Mesh
    Plane785: THREE.Mesh
    Plane786: THREE.Mesh
    Plane787: THREE.Mesh
    Plane788: THREE.Mesh
    Plane789: THREE.Mesh
    Plane790: THREE.Mesh
    Plane791: THREE.Mesh
    Plane792: THREE.Mesh
    Plane793: THREE.Mesh
    Plane794: THREE.Mesh
    Plane795: THREE.Mesh
    Plane796: THREE.Mesh
    Plane797: THREE.Mesh
    Plane798: THREE.Mesh
    Plane799: THREE.Mesh
    Plane800: THREE.Mesh
    Plane801: THREE.Mesh
    Plane802: THREE.Mesh
    Plane803: THREE.Mesh
    Plane804: THREE.Mesh
    Plane805: THREE.Mesh
    Plane806: THREE.Mesh
    Plane807: THREE.Mesh
    Plane808: THREE.Mesh
    Plane809: THREE.Mesh
    Plane810: THREE.Mesh
    Plane811: THREE.Mesh
    Plane812: THREE.Mesh
    Plane813: THREE.Mesh
    Plane814: THREE.Mesh
    Plane815: THREE.Mesh
    Plane816: THREE.Mesh
    Plane817: THREE.Mesh
    Plane818: THREE.Mesh
    Plane819: THREE.Mesh
    Plane820: THREE.Mesh
    Plane821: THREE.Mesh
    Plane822: THREE.Mesh
    Plane823: THREE.Mesh
    Plane824: THREE.Mesh
    Plane825: THREE.Mesh
    Plane826: THREE.Mesh
    Plane827: THREE.Mesh
    Plane828: THREE.Mesh
    Plane829: THREE.Mesh
    Plane830: THREE.Mesh
    Plane831: THREE.Mesh
    Plane832: THREE.Mesh
    Plane833: THREE.Mesh
    Plane834: THREE.Mesh
    Plane835: THREE.Mesh
    Plane836: THREE.Mesh
    Plane837: THREE.Mesh
    Plane838: THREE.Mesh
    Plane839: THREE.Mesh
    Plane840: THREE.Mesh
    Plane841: THREE.Mesh
    Plane842: THREE.Mesh
    Plane843: THREE.Mesh
    Plane844: THREE.Mesh
    Plane845: THREE.Mesh
    Plane846: THREE.Mesh
    Plane847: THREE.Mesh
    Plane848: THREE.Mesh
    Plane849: THREE.Mesh
    Plane850: THREE.Mesh
    Plane851: THREE.Mesh
    Plane852: THREE.Mesh
    Plane853: THREE.Mesh
    Plane854: THREE.Mesh
    Plane855: THREE.Mesh
    Plane856: THREE.Mesh
    Plane857: THREE.Mesh
    Plane858: THREE.Mesh
    Plane859: THREE.Mesh
    Plane860: THREE.Mesh
    Plane861: THREE.Mesh
    Plane862: THREE.Mesh
    Plane863: THREE.Mesh
    Plane864: THREE.Mesh
    Plane865: THREE.Mesh
    Plane866: THREE.Mesh
    Plane867: THREE.Mesh
    Plane868: THREE.Mesh
    Plane869: THREE.Mesh
    Plane870: THREE.Mesh
    Plane871: THREE.Mesh
    Plane872: THREE.Mesh
    Plane873: THREE.Mesh
    Plane874: THREE.Mesh
    Plane875: THREE.Mesh
    Plane876: THREE.Mesh
    Plane877: THREE.Mesh
    Plane878: THREE.Mesh
    Plane879: THREE.Mesh
    Plane880: THREE.Mesh
    Plane881: THREE.Mesh
    Plane882: THREE.Mesh
    Plane883: THREE.Mesh
    Plane884: THREE.Mesh
    Plane885: THREE.Mesh
    Plane886: THREE.Mesh
    Plane887: THREE.Mesh
    Plane888: THREE.Mesh
    Plane889: THREE.Mesh
    Plane890: THREE.Mesh
    Plane891: THREE.Mesh
    Plane892: THREE.Mesh
    Plane893: THREE.Mesh
    Plane894: THREE.Mesh
    Plane895: THREE.Mesh
    Plane896: THREE.Mesh
    Plane897: THREE.Mesh
    Plane898: THREE.Mesh
    Plane899: THREE.Mesh
    Plane900: THREE.Mesh
    Plane901: THREE.Mesh
    Plane902: THREE.Mesh
    Plane903: THREE.Mesh
    Plane904: THREE.Mesh
    Plane905: THREE.Mesh
    Plane906: THREE.Mesh
    Plane907: THREE.Mesh
    Plane908: THREE.Mesh
    Plane909: THREE.Mesh
    Plane910: THREE.Mesh
    Plane911: THREE.Mesh
    Plane912: THREE.Mesh
    Plane913: THREE.Mesh
    Plane914: THREE.Mesh
    Plane915: THREE.Mesh
    Plane916: THREE.Mesh
    Plane917: THREE.Mesh
    Plane918: THREE.Mesh
    Plane919: THREE.Mesh
    Plane920: THREE.Mesh
    Plane921: THREE.Mesh
    Plane922: THREE.Mesh
    Plane923: THREE.Mesh
    Plane924: THREE.Mesh
    Plane925: THREE.Mesh
    Plane926: THREE.Mesh
    Plane927: THREE.Mesh
    Plane928: THREE.Mesh
    Plane929: THREE.Mesh
    Plane930: THREE.Mesh
    Plane931: THREE.Mesh
    Plane932: THREE.Mesh
    Plane933: THREE.Mesh
    Plane934: THREE.Mesh
    Plane935: THREE.Mesh
    Plane936: THREE.Mesh
    Plane937: THREE.Mesh
    Plane938: THREE.Mesh
    Plane939: THREE.Mesh
    Plane940: THREE.Mesh
    Plane941: THREE.Mesh
    Plane942: THREE.Mesh
    Plane943: THREE.Mesh
    Plane944: THREE.Mesh
    Plane945: THREE.Mesh
    Plane946: THREE.Mesh
    Plane947: THREE.Mesh
    Plane948: THREE.Mesh
    Plane949: THREE.Mesh
    Plane950: THREE.Mesh
    Plane951: THREE.Mesh
    Plane952: THREE.Mesh
    Plane953: THREE.Mesh
    Plane954: THREE.Mesh
    Plane955: THREE.Mesh
    Plane956: THREE.Mesh
    Plane957: THREE.Mesh
    Plane958: THREE.Mesh
    Plane959: THREE.Mesh
    Plane960: THREE.Mesh
    Plane961: THREE.Mesh
    Plane962: THREE.Mesh
    Plane963: THREE.Mesh
    Plane964: THREE.Mesh
    Plane965: THREE.Mesh
    Plane966: THREE.Mesh
    Plane967: THREE.Mesh
    Plane968: THREE.Mesh
    Plane969: THREE.Mesh
    Plane970: THREE.Mesh
    Plane971: THREE.Mesh
    Plane972: THREE.Mesh
    Plane973: THREE.Mesh
    Plane974: THREE.Mesh
    Plane975: THREE.Mesh
    Plane976: THREE.Mesh
    Plane977: THREE.Mesh
    Plane978: THREE.Mesh
    Plane979: THREE.Mesh
    Plane980: THREE.Mesh
    Plane981: THREE.Mesh
    Plane982: THREE.Mesh
    Plane983: THREE.Mesh
    Plane984: THREE.Mesh
    Plane985: THREE.Mesh
    Plane986: THREE.Mesh
    Plane987: THREE.Mesh
    Plane988: THREE.Mesh
    Plane989: THREE.Mesh
    Plane990: THREE.Mesh
    Plane991: THREE.Mesh
    Plane992: THREE.Mesh
    Plane993: THREE.Mesh
    Plane994: THREE.Mesh
    Plane995: THREE.Mesh
    Plane996: THREE.Mesh
    Plane997: THREE.Mesh
    Plane998: THREE.Mesh
    Plane999: THREE.Mesh
    Plane1000: THREE.Mesh
    Plane1001: THREE.Mesh
    Plane1002: THREE.Mesh
    Plane1003: THREE.Mesh
    Plane1004: THREE.Mesh
    Plane1005: THREE.Mesh
    Plane1006: THREE.Mesh
    Plane1007: THREE.Mesh
    Plane1008: THREE.Mesh
    Plane1009: THREE.Mesh
    Plane1010: THREE.Mesh
    Plane1011: THREE.Mesh
    Plane1012: THREE.Mesh
    Plane1013: THREE.Mesh
    Plane1014: THREE.Mesh
    Plane1015: THREE.Mesh
    Plane1016: THREE.Mesh
    Plane1017: THREE.Mesh
    Plane1018: THREE.Mesh
    Plane1019: THREE.Mesh
    Plane1020: THREE.Mesh
    Plane1021: THREE.Mesh
    Plane1022: THREE.Mesh
    Plane1023: THREE.Mesh
    Plane1024: THREE.Mesh
    Plane1025: THREE.Mesh
    Plane1026: THREE.Mesh
    Plane1027: THREE.Mesh
    Plane1028: THREE.Mesh
    Plane1029: THREE.Mesh
    Plane1030: THREE.Mesh
    Plane1031: THREE.Mesh
    Plane1032: THREE.Mesh
    Plane1033: THREE.Mesh
    Plane1034: THREE.Mesh
    Plane1035: THREE.Mesh
    Plane1036: THREE.Mesh
    Plane1037: THREE.Mesh
    Plane1038: THREE.Mesh
    Plane1039: THREE.Mesh
    Plane1040: THREE.Mesh
    Plane1041: THREE.Mesh
    Plane1042: THREE.Mesh
    Plane1043: THREE.Mesh
    Plane1044: THREE.Mesh
    Plane1045: THREE.Mesh
    Plane1046: THREE.Mesh
    Plane1047: THREE.Mesh
    Plane1048: THREE.Mesh
    Plane1049: THREE.Mesh
    Plane1050: THREE.Mesh
    Plane1051: THREE.Mesh
    Plane1052: THREE.Mesh
    Plane1053: THREE.Mesh
    Plane1054: THREE.Mesh
    Plane1055: THREE.Mesh
    Plane1056: THREE.Mesh
    Plane1057: THREE.Mesh
    Plane1058: THREE.Mesh
    Plane1059: THREE.Mesh
    Plane1060: THREE.Mesh
    Plane1061: THREE.Mesh
    Plane1062: THREE.Mesh
    Plane1063: THREE.Mesh
    Plane1064: THREE.Mesh
    Plane1065: THREE.Mesh
    Plane1066: THREE.Mesh
    Plane1067: THREE.Mesh
    Plane1068: THREE.Mesh
    Plane1069: THREE.Mesh
    Plane1070: THREE.Mesh
    Plane1071: THREE.Mesh
    Plane1072: THREE.Mesh
    Plane1073: THREE.Mesh
    Plane1074: THREE.Mesh
    Plane1075: THREE.Mesh
    Plane1076: THREE.Mesh
    Plane1077: THREE.Mesh
    Plane1078: THREE.Mesh
    Plane1079: THREE.Mesh
    Plane1080: THREE.Mesh
    Plane1081: THREE.Mesh
    Plane1082: THREE.Mesh
    Plane1083: THREE.Mesh
    Plane1084: THREE.Mesh
    Plane002: THREE.Mesh
    Plane004: THREE.Mesh
    Icosphere: THREE.Mesh
    Icosphere001: THREE.Mesh
    Icosphere002: THREE.Mesh
    Icosphere003: THREE.Mesh
    Icosphere004: THREE.Mesh
    Icosphere005: THREE.Mesh
    Icosphere006: THREE.Mesh
    Icosphere007: THREE.Mesh
    Icosphere008: THREE.Mesh
    Plane: THREE.Mesh
    Plane003: THREE.Mesh
    Circle: THREE.Mesh
    Plane004_2: THREE.Mesh
    Plane004_3: THREE.Mesh
    Plane004_4: THREE.Mesh
    Plane004_5: THREE.Mesh
    Plane004_6: THREE.Mesh
    Plane004_7: THREE.Mesh
    Plane004_8: THREE.Mesh
    Plane004_9: THREE.Mesh
    Plane004_10: THREE.Mesh
    Plane004_11: THREE.Mesh
    Plane004_12: THREE.Mesh
    Plane004_13: THREE.Mesh
    Plane004_14: THREE.Mesh
    Plane004_15: THREE.Mesh
    Plane004_16: THREE.Mesh
    Plane004_17: THREE.Mesh
    Plane004_18: THREE.Mesh
    Plane004_19: THREE.Mesh
    Plane004_20: THREE.Mesh
    Plane004_21: THREE.Mesh
    Plane004_22: THREE.Mesh
    Plane004_23: THREE.Mesh
    Plane004_24: THREE.Mesh
    Plane004_25: THREE.Mesh
    Plane004_26: THREE.Mesh
    Plane004_27: THREE.Mesh
    Plane004_28: THREE.Mesh
    Plane004_29: THREE.Mesh
    Plane004_30: THREE.Mesh
    Plane004_31: THREE.Mesh
    Plane004_32: THREE.Mesh
    Plane004_33: THREE.Mesh
    Plane004_34: THREE.Mesh
    Plane004_35: THREE.Mesh
    Plane004_36: THREE.Mesh
    Plane004_37: THREE.Mesh
    Plane004_38: THREE.Mesh
    Plane004_39: THREE.Mesh
    Plane004_40: THREE.Mesh
    Plane004_41: THREE.Mesh
    Plane004_42: THREE.Mesh
    Plane004_43: THREE.Mesh
    Plane004_44: THREE.Mesh
    Plane004_45: THREE.Mesh
    Plane004_46: THREE.Mesh
    Plane004_47: THREE.Mesh
    Plane004_48: THREE.Mesh
    Plane004_49: THREE.Mesh
    Plane004_50: THREE.Mesh
    Plane004_51: THREE.Mesh
    Plane004_52: THREE.Mesh
    Plane004_53: THREE.Mesh
    Plane004_54: THREE.Mesh
    Plane004_55: THREE.Mesh
    Plane004_56: THREE.Mesh
    Plane004_57: THREE.Mesh
    Plane004_58: THREE.Mesh
    Plane004_59: THREE.Mesh
    Plane004_60: THREE.Mesh
    Plane004_61: THREE.Mesh
    Plane004_62: THREE.Mesh
    Plane004_63: THREE.Mesh
    Plane004_64: THREE.Mesh
    Plane004_65: THREE.Mesh
    Plane004_66: THREE.Mesh
    Plane004_67: THREE.Mesh
    Plane004_68: THREE.Mesh
    Plane004_69: THREE.Mesh
    Plane004_70: THREE.Mesh
    Plane004_71: THREE.Mesh
    Plane004_72: THREE.Mesh
    Plane004_73: THREE.Mesh
    Plane004_74: THREE.Mesh
    Plane004_75: THREE.Mesh
    Plane004_76: THREE.Mesh
    Plane004_77: THREE.Mesh
    Plane004_78: THREE.Mesh
    Plane004_79: THREE.Mesh
    Plane004_80: THREE.Mesh
    Plane004_81: THREE.Mesh
    Plane004_82: THREE.Mesh
    Plane004_83: THREE.Mesh
    Plane004_84: THREE.Mesh
    Plane004_85: THREE.Mesh
    Plane004_86: THREE.Mesh
    Plane004_87: THREE.Mesh
    Plane004_88: THREE.Mesh
    Plane004_89: THREE.Mesh
    Plane004_90: THREE.Mesh
    Plane004_91: THREE.Mesh
    Plane004_92: THREE.Mesh
    Plane004_93: THREE.Mesh
    Plane004_94: THREE.Mesh
    Plane004_95: THREE.Mesh
    Plane004_96: THREE.Mesh
    Plane004_97: THREE.Mesh
    Plane004_98: THREE.Mesh
    Plane004_99: THREE.Mesh
    Plane004_100: THREE.Mesh
    Plane004_101: THREE.Mesh
    Plane004_102: THREE.Mesh
    Plane004_103: THREE.Mesh
    Plane004_104: THREE.Mesh
    Plane004_105: THREE.Mesh
    Plane004_106: THREE.Mesh
    Plane004_107: THREE.Mesh
    Plane004_108: THREE.Mesh
    Plane004_109: THREE.Mesh
    Plane004_110: THREE.Mesh
    Plane004_111: THREE.Mesh
    Plane004_112: THREE.Mesh
    Plane004_113: THREE.Mesh
    Plane004_114: THREE.Mesh
    Plane004_115: THREE.Mesh
    Plane004_116: THREE.Mesh
    Plane004_117: THREE.Mesh
    Plane004_118: THREE.Mesh
    Plane004_119: THREE.Mesh
    Plane004_120: THREE.Mesh
    Plane004_121: THREE.Mesh
    Plane004_122: THREE.Mesh
    Plane004_123: THREE.Mesh
    Plane004_124: THREE.Mesh
    Plane004_125: THREE.Mesh
    Plane004_126: THREE.Mesh
    Plane004_127: THREE.Mesh
    Plane004_128: THREE.Mesh
    Plane004_129: THREE.Mesh
    Plane004_130: THREE.Mesh
    Plane004_131: THREE.Mesh
    Plane004_132: THREE.Mesh
    Plane004_133: THREE.Mesh
    Plane004_134: THREE.Mesh
    Plane004_135: THREE.Mesh
    Plane004_136: THREE.Mesh
    Plane004_137: THREE.Mesh
    Plane004_138: THREE.Mesh
    Plane004_139: THREE.Mesh
    Plane004_140: THREE.Mesh
    Plane004_141: THREE.Mesh
  }
  materials: {
    leaf: THREE.MeshStandardMaterial
    water: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    wood: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export const Ground = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/type.glb') as GLTFResult
  return (
    <group {...props} dispose={null} scale={0.35} rotation={[0, 0.42, 0]}>

      <mesh geometry={nodes.Plane001.geometry} material={materials.leaf} position={[-0.11, -2.12, 0.2]} scale={0.39} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.leaf} position={[4.09, 3.28, -6.99]} rotation={[-1.65, 1.07, -2.41]} scale={0.19} />
      <mesh geometry={nodes.Plane006.geometry} material={materials.leaf} position={[4.26, 2.69, -7.2]} rotation={[-1.11, 0.44, -2.7]} scale={0.1} />
      <mesh geometry={nodes.Plane007.geometry} material={materials.leaf} position={[4.51, 2.72, -7.34]} rotation={[-2.24, 1.11, 0.73]} scale={0.11} />
      <mesh geometry={nodes.Plane008.geometry} material={materials.leaf} position={[4.05, 3.19, -6.75]} rotation={[-2.82, -0.64, -1.52]} scale={0.19} />
      <mesh geometry={nodes.Plane009.geometry} material={materials.leaf} position={[4.04, 2.88, -7.06]} rotation={[1.7, -0.93, -1.98]} scale={0.16} />
      <mesh geometry={nodes.Plane010.geometry} material={materials.leaf} position={[4.03, 3.18, -7.01]} rotation={[-1.76, -0.3, -2.51]} scale={0.2} />
      <mesh geometry={nodes.Plane011.geometry} material={materials.leaf} position={[4.44, 2.85, -7.55]} rotation={[3, 1.07, -1.61]} scale={0.12} />
      <mesh geometry={nodes.Plane012.geometry} material={materials.leaf} position={[4.59, 2.99, -7.65]} rotation={[0.12, -0.17, -0.18]} scale={0.09} />
      <mesh geometry={nodes.Plane013.geometry} material={materials.leaf} position={[4.3, 2.71, -6.78]} rotation={[-1.03, 0.61, -0.2]} scale={0.13} />
      <mesh geometry={nodes.Plane014.geometry} material={materials.leaf} position={[4.44, 2.85, -7.55]} rotation={[2.28, 0.96, -1.9]} scale={0.18} />
      <mesh geometry={nodes.Plane015.geometry} material={materials.leaf} position={[4.13, 2.77, -6.78]} rotation={[2.42, -0.57, -2.5]} scale={0.15} />
      <mesh geometry={nodes.Plane016.geometry} material={materials.leaf} position={[4.18, 3.11, -6.48]} rotation={[-1.22, 0.62, -0.66]} scale={0.11} />
      <mesh geometry={nodes.Plane017.geometry} material={materials.leaf} position={[4.57, 2.86, -7.53]} rotation={[-1.4, -0.03, 1.18]} scale={0.13} />
      <mesh geometry={nodes.Plane018.geometry} material={materials.leaf} position={[4.14, 3.1, -7.4]} rotation={[-0.25, 0.24, 0.77]} scale={0.13} />
      <mesh geometry={nodes.Plane019.geometry} material={materials.leaf} position={[4.4, 3.02, -6.49]} rotation={[-2.08, -1.03, -1.79]} scale={0.1} />
      <mesh geometry={nodes.Plane020.geometry} material={materials.leaf} position={[4.27, 2.69, -6.96]} rotation={[-2.42, -0.72, 2.42]} scale={0.18} />
      <mesh geometry={nodes.Plane021.geometry} material={materials.leaf} position={[4.48, 2.74, -6.77]} rotation={[-1.04, -1.22, -2.54]} scale={0.09} />
      <mesh geometry={nodes.Plane022.geometry} material={materials.leaf} position={[4.34, 2.99, -6.47]} rotation={[0.37, 0.05, 1.02]} scale={0.18} />
      <mesh geometry={nodes.Plane023.geometry} material={materials.leaf} position={[4.19, 3.01, -6.49]} rotation={[-2.04, 0.36, -1.27]} scale={0.08} />
      <mesh geometry={nodes.Plane024.geometry} material={materials.leaf} position={[4.52, 3.42, -7.03]} rotation={[0.74, 0.53, 0.35]} scale={0.19} />
      <mesh geometry={nodes.Plane025.geometry} material={materials.leaf} position={[4.2, 3.33, -7.29]} rotation={[-2.63, -0.27, -2.57]} scale={0.18} />
      <mesh geometry={nodes.Plane026.geometry} material={materials.leaf} position={[4.56, 2.9, -6.73]} rotation={[0.32, 0.83, -2.79]} scale={0.15} />
      <mesh geometry={nodes.Plane027.geometry} material={materials.leaf} position={[4.26, 2.69, -7.18]} rotation={[-1.33, -1.48, -3.1]} scale={0.17} />
      <mesh geometry={nodes.Plane028.geometry} material={materials.leaf} position={[4.03, 3.18, -7.01]} rotation={[1.13, -0.22, 2.43]} scale={0.09} />
      <mesh geometry={nodes.Plane029.geometry} material={materials.leaf} position={[4.02, 3.04, -6.78]} rotation={[-1.49, -0.68, 3.08]} scale={0.16} />
      <mesh geometry={nodes.Plane030.geometry} material={materials.leaf} position={[4.22, 2.86, -6.52]} rotation={[1.68, 0.2, 0.8]} scale={0.12} />
      <mesh geometry={nodes.Plane031.geometry} material={materials.leaf} position={[4.5, 2.77, -7.45]} rotation={[-1.87, 0.33, 0.06]} scale={0.09} />
      <mesh geometry={nodes.Plane032.geometry} material={materials.leaf} position={[4.24, 3.25, -6.59]} rotation={[1.35, -0.48, 1.6]} scale={0.17} />
      <mesh geometry={nodes.Plane033.geometry} material={materials.leaf} position={[4.32, 2.68, -6.86]} rotation={[-0.9, 0, -2.77]} scale={0.08} />
      <mesh geometry={nodes.Plane034.geometry} material={materials.leaf} position={[4.2, 3.33, -7.29]} rotation={[2.99, -0.76, -2.36]} scale={0.09} />
      <mesh geometry={nodes.Plane035.geometry} material={materials.leaf} position={[4.58, 3.13, -6.72]} rotation={[-1.93, 0.11, -1.51]} scale={0.16} />
      <mesh geometry={nodes.Plane036.geometry} material={materials.leaf} position={[4.67, 2.84, -6.96]} rotation={[-1.07, -0.41, -1.23]} scale={0.14} />
      <mesh geometry={nodes.Plane037.geometry} material={materials.leaf} position={[4.3, 2.71, -6.78]} rotation={[-0.32, -1, -0.19]} scale={0.19} />
      <mesh geometry={nodes.Plane038.geometry} material={materials.leaf} position={[4.48, 3.15, -7.6]} rotation={[0.59, 0.72, -0.62]} scale={0.15} />
      <mesh geometry={nodes.Plane039.geometry} material={materials.leaf} position={[4.26, 2.69, -7.2]} rotation={[-2.85, -0.37, -3.07]} scale={0.09} />
      <mesh geometry={nodes.Plane040.geometry} material={materials.leaf} position={[4.04, 2.92, -7.04]} rotation={[2.44, 0.5, 2.72]} scale={0.17} />
      <mesh geometry={nodes.Plane041.geometry} material={materials.leaf} position={[4.72, 3, -7.1]} rotation={[2.16, 0.92, -0.94]} scale={0.14} />
      <mesh geometry={nodes.Plane042.geometry} material={materials.leaf} position={[4.49, 2.75, -6.78]} rotation={[-0.01, -0.83, -0.8]} scale={0.15} />
      <mesh geometry={nodes.Plane043.geometry} material={materials.leaf} position={[4.2, 3.33, -7.29]} rotation={[1.97, -1.23, -2.83]} scale={0.09} />
      <mesh geometry={nodes.Plane044.geometry} material={materials.leaf} position={[4.44, 2.85, -7.55]} rotation={[0.75, 0.75, -1.43]} scale={0.14} />
      <mesh geometry={nodes.Plane045.geometry} material={materials.leaf} position={[4.4, 2.66, -7.07]} rotation={[0.42, -0.23, -1.28]} scale={0.18} />
      <mesh geometry={nodes.Plane046.geometry} material={materials.leaf} position={[4.4, 3.02, -6.49]} rotation={[0.22, -1.28, -0.03]} scale={0.19} />
      <mesh geometry={nodes.Plane047.geometry} material={materials.leaf} position={[4.07, 3.14, -7.16]} rotation={[-2.92, -0.25, -2.45]} scale={0.1} />
      <mesh geometry={nodes.Plane048.geometry} material={materials.leaf} position={[4.26, 2.69, -7.18]} rotation={[2.22, 0.01, -2.65]} scale={0.15} />
      <mesh geometry={nodes.Plane049.geometry} material={materials.leaf} position={[4.4, 3.02, -6.49]} rotation={[-0.56, -0.1, -1.64]} scale={0.13} />
      <mesh geometry={nodes.Plane050.geometry} material={materials.leaf} position={[4.29, 3.41, -6.86]} rotation={[2.79, 0.98, -1.2]} scale={0.17} />
      <mesh geometry={nodes.Plane051.geometry} material={materials.leaf} position={[4.08, 3.18, -6.59]} rotation={[-1.55, 0.38, -0.39]} scale={0.09} />
      <mesh geometry={nodes.Plane052.geometry} material={materials.leaf} position={[4.28, 2.7, -6.82]} rotation={[1.55, -0.79, 2.62]} scale={0.19} />
      <mesh geometry={nodes.Plane053.geometry} material={materials.leaf} position={[4.18, 3.22, -7.38]} rotation={[-0.63, -0.71, -2.81]} scale={0.09} />
      <mesh geometry={nodes.Plane054.geometry} material={materials.leaf} position={[4.67, 2.84, -6.96]} rotation={[1.26, 0.35, -0.19]} scale={0.16} />
      <mesh geometry={nodes.Plane055.geometry} material={materials.leaf} position={[4.14, 3.13, -7.38]} rotation={[0.19, 1.08, 2.86]} scale={0.13} />
      <mesh geometry={nodes.Plane056.geometry} material={materials.leaf} position={[4.18, 3.22, -7.38]} rotation={[-1.21, 0.74, 2.63]} scale={0.11} />
      <mesh geometry={nodes.Plane057.geometry} material={materials.leaf} position={[4.47, 2.71, -7.38]} rotation={[0.31, -0.14, -1.88]} scale={0.11} />
      <mesh geometry={nodes.Plane058.geometry} material={materials.leaf} position={[4.64, 3.31, -7.32]} rotation={[-2.1, 1.09, 2.44]} scale={0.19} />
      <mesh geometry={nodes.Plane059.geometry} material={materials.leaf} position={[4.46, 2.69, -7.25]} rotation={[-0.56, 0.76, -1.96]} scale={0.09} />
      <mesh geometry={nodes.Plane060.geometry} material={materials.leaf} position={[4.66, 3.29, -7.37]} rotation={[0.02, -0.77, 1.27]} scale={0.11} />
      <mesh geometry={nodes.Plane061.geometry} material={materials.leaf} position={[4.23, 3.14, -6.5]} rotation={[2.49, -1.18, 1.21]} scale={0.09} />
      <mesh geometry={nodes.Plane062.geometry} material={materials.leaf} position={[4.36, 2.72, -7.32]} rotation={[1.82, -0.02, -1.22]} scale={0.11} />
      <mesh geometry={nodes.Plane063.geometry} material={materials.leaf} position={[4.21, 2.86, -6.53]} rotation={[1.38, -0.86, 0.25]} scale={0.15} />
      <mesh geometry={nodes.Plane064.geometry} material={materials.leaf} position={[4.34, 2.99, -6.47]} rotation={[2.12, -0.8, -2.8]} scale={0.17} />
      <mesh geometry={nodes.Plane065.geometry} material={materials.leaf} position={[4.11, 2.98, -7.27]} rotation={[1.14, 0.08, -1.91]} scale={0.15} />
      <mesh geometry={nodes.Plane066.geometry} material={materials.leaf} position={[4.47, 2.71, -7.38]} rotation={[-0.04, 1.18, -0.26]} scale={0.18} />
      <mesh geometry={nodes.Plane067.geometry} material={materials.leaf} position={[4.58, 3.04, -7.63]} rotation={[2.42, 0.08, 2.93]} scale={0.12} />
      <mesh geometry={nodes.Plane068.geometry} material={materials.leaf} position={[4.62, 2.78, -7]} rotation={[-2.47, -0.5, -2.98]} scale={0.16} />
      <mesh geometry={nodes.Plane069.geometry} material={materials.leaf} position={[4.49, 2.73, -7.41]} rotation={[-2.94, 0.02, 1.62]} scale={0.17} />
      <mesh geometry={nodes.Plane070.geometry} material={materials.leaf} position={[4.66, 3.1, -7.56]} rotation={[-0.99, 0.69, 1.33]} scale={0.17} />
      <mesh geometry={nodes.Plane071.geometry} material={materials.leaf} position={[4.24, 3.25, -6.59]} rotation={[-0.71, -1.12, -0.44]} scale={0.12} />
      <mesh geometry={nodes.Plane072.geometry} material={materials.leaf} position={[4.52, 3.42, -7.03]} rotation={[-2.83, -0.13, -2.02]} scale={0.17} />
      <mesh geometry={nodes.Plane073.geometry} material={materials.leaf} position={[4.18, 3.11, -6.48]} rotation={[-0.76, 1.11, -1.95]} scale={0.13} />
      <mesh geometry={nodes.Plane074.geometry} material={materials.leaf} position={[4.56, 2.9, -6.73]} rotation={[-2.52, -0.53, -1.9]} scale={0.2} />
      <mesh geometry={nodes.Plane075.geometry} material={materials.leaf} position={[4.48, 2.74, -6.77]} rotation={[1.59, -1.33, 0.82]} scale={0.19} />
      <mesh geometry={nodes.Plane076.geometry} material={materials.leaf} position={[4.12, 2.8, -6.75]} rotation={[3, 0.84, 1.91]} scale={0.09} />
      <mesh geometry={nodes.Plane077.geometry} material={materials.leaf} position={[4.05, 3.19, -6.75]} rotation={[-2.53, -0.74, -2]} scale={0.1} />
      <mesh geometry={nodes.Plane078.geometry} material={materials.leaf} position={[4.36, 2.93, -7.62]} rotation={[-1.63, -0.63, 2.24]} scale={0.08} />
      <mesh geometry={nodes.Plane079.geometry} material={materials.leaf} position={[4.68, 3.1, -7.53]} rotation={[1.67, 0.8, 0.53]} scale={0.14} />
      <mesh geometry={nodes.Plane080.geometry} material={materials.leaf} position={[4.11, 2.98, -7.27]} rotation={[1.81, 1.1, -2.11]} scale={0.11} />
      <mesh geometry={nodes.Plane081.geometry} material={materials.leaf} position={[4.26, 2.69, -7.2]} rotation={[2.81, -0.5, 2.28]} scale={0.11} />
      <mesh geometry={nodes.Plane082.geometry} material={materials.leaf} position={[4.4, 3.02, -6.49]} rotation={[-0.11, 0.36, 1.4]} scale={0.1} />
      <mesh geometry={nodes.Plane083.geometry} material={materials.leaf} position={[4.18, 3.36, -7.11]} rotation={[1.24, 1.21, 0.07]} scale={0.13} />
      <mesh geometry={nodes.Plane084.geometry} material={materials.leaf} position={[4.4, 2.66, -7.09]} rotation={[-2.01, 1.04, -0.26]} scale={0.13} />
      <mesh geometry={nodes.Plane085.geometry} material={materials.leaf} position={[4.03, 3.18, -7.01]} rotation={[3.02, 0.55, 2.59]} scale={0.18} />
      <mesh geometry={nodes.Plane086.geometry} material={materials.leaf} position={[4.41, 2.68, -7.21]} rotation={[2.25, -0.11, -2.98]} scale={0.1} />
      <mesh geometry={nodes.Plane087.geometry} material={materials.leaf} position={[4.47, 3.23, -6.58]} rotation={[0.57, 0.51, -0.18]} scale={0.1} />
      <mesh geometry={nodes.Plane088.geometry} material={materials.leaf} position={[4.5, 2.77, -7.45]} rotation={[0.18, 1.03, -1.11]} scale={0.18} />
      <mesh geometry={nodes.Plane089.geometry} material={materials.leaf} position={[4.34, 3.2, -6.54]} rotation={[2.66, -1.37, -1.59]} scale={0.13} />
      <mesh geometry={nodes.Plane090.geometry} material={materials.leaf} position={[4.47, 2.72, -7.4]} rotation={[1.39, -0.67, -0.23]} scale={0.19} />
      <mesh geometry={nodes.Plane091.geometry} material={materials.leaf} position={[4.43, 2.76, -6.73]} rotation={[1.93, 0.06, 1.99]} scale={0.12} />
      <mesh geometry={nodes.Plane092.geometry} material={materials.leaf} position={[4.7, 3.22, -7.29]} rotation={[2.13, -1.27, -2.87]} scale={0.19} />
      <mesh geometry={nodes.Plane093.geometry} material={materials.leaf} position={[4, 3.13, -6.92]} rotation={[-3.14, -0.22, 2.16]} scale={0.13} />
      <mesh geometry={nodes.Plane094.geometry} material={materials.leaf} position={[4.25, 2.72, -7.23]} rotation={[-1.06, 1.12, 1.82]} scale={0.1} />
      <mesh geometry={nodes.Plane095.geometry} material={materials.leaf} position={[4.07, 3.14, -7.16]} rotation={[-2.34, -0.6, -1.85]} scale={0.11} />
      <mesh geometry={nodes.Plane096.geometry} material={materials.leaf} position={[4.77, 3.1, -7.29]} rotation={[-0.57, -0.42, -0.4]} scale={0.18} />
      <mesh geometry={nodes.Plane097.geometry} material={materials.leaf} position={[4.66, 3.07, -6.81]} rotation={[-1.57, 0.62, 0.21]} scale={0.17} />
      <mesh geometry={nodes.Plane098.geometry} material={materials.leaf} position={[4.07, 3.14, -7.16]} rotation={[2.36, 0.82, -2.61]} scale={0.11} />
      <mesh geometry={nodes.Plane099.geometry} material={materials.leaf} position={[4.66, 3.03, -6.78]} rotation={[-0.61, -0.14, 1.28]} scale={0.09} />
      <mesh geometry={nodes.Plane100.geometry} material={materials.leaf} position={[4.12, 2.8, -6.75]} rotation={[-1.28, 0.52, -2.44]} scale={0.16} />
      <mesh geometry={nodes.Plane101.geometry} material={materials.leaf} position={[4.53, 3.02, -6.63]} rotation={[-2.03, 0.84, -0.08]} scale={0.11} />
      <mesh geometry={nodes.Plane102.geometry} material={materials.leaf} position={[4.66, 3.29, -7.37]} rotation={[0.01, 0.38, 1.21]} scale={0.16} />
      <mesh geometry={nodes.Plane103.geometry} material={materials.leaf} position={[4.53, 2.74, -7.4]} rotation={[2.31, -0.79, 0.67]} scale={0.19} />
      <mesh geometry={nodes.Plane104.geometry} material={materials.leaf} position={[4.7, 2.87, -7.22]} rotation={[1.56, 0.25, 1.08]} scale={0.15} />
      <mesh geometry={nodes.Plane105.geometry} material={materials.leaf} position={[4.49, 2.72, -7.38]} rotation={[2.5, 0.47, -2.73]} scale={0.18} />
      <mesh geometry={nodes.Plane106.geometry} material={materials.leaf} position={[4.27, 3.38, -6.75]} rotation={[-1.66, -1, -2.5]} scale={0.16} />
      <mesh geometry={nodes.Plane107.geometry} material={materials.leaf} position={[4.5, 2.69, -7.06]} rotation={[0.16, -0.83, 0.01]} scale={0.15} />
      <mesh geometry={nodes.Plane108.geometry} material={materials.leaf} position={[4.31, 2.69, -6.83]} rotation={[-2.35, 0.22, -1.64]} scale={0.12} />
      <mesh geometry={nodes.Plane109.geometry} material={materials.leaf} position={[4.47, 2.78, -6.73]} rotation={[0.33, 0.38, -0.89]} scale={0.1} />
      <mesh geometry={nodes.Plane110.geometry} material={materials.leaf} position={[4.58, 3.13, -6.72]} rotation={[0.08, 0.64, -1.4]} scale={0.11} />
      <mesh geometry={nodes.Plane111.geometry} material={materials.leaf} position={[4.52, 3.42, -7.03]} rotation={[0.3, 0.97, 0.52]} scale={0.17} />
      <mesh geometry={nodes.Plane112.geometry} material={materials.leaf} position={[4.01, 3.14, -6.87]} rotation={[3.05, 0.85, 2.83]} scale={0.11} />
      <mesh geometry={nodes.Plane113.geometry} material={materials.leaf} position={[4.17, 2.74, -6.96]} rotation={[1.8, -0.32, -2.59]} scale={0.15} />
      <mesh geometry={nodes.Plane114.geometry} material={materials.leaf} position={[4.31, 2.69, -6.83]} rotation={[-0.3, -0.42, -1.47]} scale={0.12} />
      <mesh geometry={nodes.Plane115.geometry} material={materials.leaf} position={[4.38, 2.66, -7.03]} rotation={[0.4, 0.32, -0.02]} scale={0.12} />
      <mesh geometry={nodes.Plane116.geometry} material={materials.leaf} position={[4.57, 3.34, -6.95]} rotation={[0.03, 0.11, -0.54]} scale={0.17} />
      <mesh geometry={nodes.Plane117.geometry} material={materials.leaf} position={[4.68, 3.06, -7.57]} rotation={[-1.32, 0.14, 1.67]} scale={0.09} />
      <mesh geometry={nodes.Plane118.geometry} material={materials.leaf} position={[4.5, 3.23, -6.64]} rotation={[0.98, 0.09, 0.81]} scale={0.19} />
      <mesh geometry={nodes.Plane119.geometry} material={materials.leaf} position={[4.11, 2.98, -7.27]} rotation={[-1.82, 0.59, 0.7]} scale={0.17} />
      <mesh geometry={nodes.Plane120.geometry} material={materials.leaf} position={[4.66, 3.03, -6.78]} rotation={[0.85, -0.24, 0.69]} scale={0.17} />
      <mesh geometry={nodes.Plane121.geometry} material={materials.leaf} position={[4.58, 3.04, -7.63]} rotation={[-1.47, 0.12, 2.57]} scale={0.1} />
      <mesh geometry={nodes.Plane122.geometry} material={materials.leaf} position={[4.45, 2.98, -7.64]} rotation={[-0.96, 0.46, 2.33]} scale={0.09} />
      <mesh geometry={nodes.Plane123.geometry} material={materials.leaf} position={[4.67, 3.29, -7.35]} rotation={[-2.62, 0.3, 1.14]} scale={0.11} />
      <mesh geometry={nodes.Plane124.geometry} material={materials.leaf} position={[4.51, 2.72, -7.34]} rotation={[-2.15, -0.52, -0.55]} scale={0.18} />
      <mesh geometry={nodes.Plane125.geometry} material={materials.leaf} position={[5.59, 2.92, -5.95]} rotation={[-0.65, 0.91, -1.05]} scale={0.09} />
      <mesh geometry={nodes.Plane126.geometry} material={materials.leaf} position={[5.06, 3.18, -6.38]} rotation={[-2.66, 1.16, 2.41]} scale={0.15} />
      <mesh geometry={nodes.Plane127.geometry} material={materials.leaf} position={[5.41, 3.23, -5.97]} rotation={[1.61, -0.9, 2.44]} scale={0.15} />
      <mesh geometry={nodes.Plane128.geometry} material={materials.leaf} position={[5.37, 2.81, -6.71]} rotation={[2.89, -0.9, 0.87]} scale={0.13} />
      <mesh geometry={nodes.Plane129.geometry} material={materials.leaf} position={[5.15, 2.88, -6.63]} rotation={[-1.02, 0.09, 3.12]} scale={0.18} />
      <mesh geometry={nodes.Plane130.geometry} material={materials.leaf} position={[5.56, 3.02, -6.82]} rotation={[-2.11, 0.46, 2.92]} scale={0.18} />
      <mesh geometry={nodes.Plane131.geometry} material={materials.leaf} position={[5.41, 3.24, -6.68]} rotation={[-2.51, -0.26, -1.74]} scale={0.17} />
      <mesh geometry={nodes.Plane132.geometry} material={materials.leaf} position={[5.27, 2.66, -6.27]} rotation={[-1.27, 0.66, 2.26]} scale={0.19} />
      <mesh geometry={nodes.Plane133.geometry} material={materials.leaf} position={[5.1, 3.16, -6.06]} rotation={[-1.99, -0.05, -2.69]} scale={0.15} />
      <mesh geometry={nodes.Plane134.geometry} material={materials.leaf} position={[5.37, 2.71, -6.08]} rotation={[-2.25, 0.24, -2.92]} scale={0.19} />
      <mesh geometry={nodes.Plane135.geometry} material={materials.leaf} position={[5.81, 2.78, -6.7]} rotation={[-1.7, 1.11, -0.37]} scale={0.14} />
      <mesh geometry={nodes.Plane136.geometry} material={materials.leaf} position={[5.45, 2.63, -6.48]} rotation={[2.08, 0.42, -2.43]} scale={0.11} />
      <mesh geometry={nodes.Plane137.geometry} material={materials.leaf} position={[5.04, 2.85, -6.11]} rotation={[-2.97, -1.03, -1.93]} scale={0.18} />
      <mesh geometry={nodes.Plane138.geometry} material={materials.leaf} position={[5.49, 2.75, -6.69]} rotation={[-0.21, 0.85, 0.27]} scale={0.13} />
      <mesh geometry={nodes.Plane139.geometry} material={materials.leaf} position={[5.34, 2.64, -6.48]} rotation={[-0.02, 1.27, -0.59]} scale={0.19} />
      <mesh geometry={nodes.Plane140.geometry} material={materials.leaf} position={[5.93, 2.79, -6.6]} rotation={[-0.85, 1.14, -1.31]} scale={0.19} />
      <mesh geometry={nodes.Plane141.geometry} material={materials.leaf} position={[5.29, 3.05, -5.93]} rotation={[1.95, 0.09, -2.17]} scale={0.11} />
      <mesh geometry={nodes.Plane142.geometry} material={materials.leaf} position={[6.13, 3.2, -6.53]} rotation={[0.53, -0.92, 2.08]} scale={0.16} />
      <mesh geometry={nodes.Plane143.geometry} material={materials.leaf} position={[5.48, 2.62, -6.4]} rotation={[-2.65, 1.11, 1.09]} scale={0.11} />
      <mesh geometry={nodes.Plane144.geometry} material={materials.leaf} position={[5.27, 2.66, -6.27]} rotation={[2.6, -0.32, 3.12]} scale={0.17} />
      <mesh geometry={nodes.Plane145.geometry} material={materials.leaf} position={[5.67, 2.73, -6.71]} rotation={[0.67, 0.54, 0.1]} scale={0.18} />
      <mesh geometry={nodes.Plane146.geometry} material={materials.leaf} position={[5.55, 3.13, -5.93]} rotation={[-0.97, 0.37, -2.38]} scale={0.13} />
      <mesh geometry={nodes.Plane147.geometry} material={materials.leaf} position={[5.26, 3.18, -6]} rotation={[1.49, -0.63, 2.57]} scale={0.19} />
      <mesh geometry={nodes.Plane148.geometry} material={materials.leaf} position={[6.06, 2.89, -6.34]} rotation={[2.57, -0.16, 0.51]} scale={0.18} />
      <mesh geometry={nodes.Plane149.geometry} material={materials.leaf} position={[5.84, 3.37, -6.52]} rotation={[-0.16, 0.19, 1.12]} scale={0.19} />
      <mesh geometry={nodes.Plane150.geometry} material={materials.leaf} position={[5.31, 3.36, -6.32]} rotation={[2.56, 0.22, 0.08]} scale={0.13} />
      <mesh geometry={nodes.Plane151.geometry} material={materials.leaf} position={[6.01, 3, -6.18]} rotation={[1.36, 0.26, 0.26]} scale={0.19} />
      <mesh geometry={nodes.Plane152.geometry} material={materials.leaf} position={[5.7, 3.32, -6.1]} rotation={[2.63, 0.09, 1.52]} scale={0.15} />
      <mesh geometry={nodes.Plane153.geometry} material={materials.leaf} position={[5.31, 3.36, -6.32]} rotation={[-3.14, -0.81, -2.15]} scale={0.19} />
      <mesh geometry={nodes.Plane154.geometry} material={materials.leaf} position={[4.99, 3.14, -6.32]} rotation={[-3.1, -0.26, 1.84]} scale={0.17} />
      <mesh geometry={nodes.Plane155.geometry} material={materials.leaf} position={[5.1, 2.72, -6.33]} rotation={[-1.33, -0.02, 2.21]} scale={0.14} />
      <mesh geometry={nodes.Plane156.geometry} material={materials.leaf} position={[5.27, 2.66, -6.27]} rotation={[2.37, 1.39, 2.55]} scale={0.09} />
      <mesh geometry={nodes.Plane157.geometry} material={materials.leaf} position={[5.46, 2.64, -6.22]} rotation={[0.33, -0.11, -0.41]} scale={0.14} />
      <mesh geometry={nodes.Plane158.geometry} material={materials.leaf} position={[5.84, 3.37, -6.52]} rotation={[0.16, -0.94, -0.97]} scale={0.08} />
      <mesh geometry={nodes.Plane159.geometry} material={materials.leaf} position={[5.21, 3.26, -6.49]} rotation={[3.05, 0.66, -2.88]} scale={0.18} />
      <mesh geometry={nodes.Plane160.geometry} material={materials.leaf} position={[5.17, 2.94, -5.94]} rotation={[-1.17, -1.05, -1.52]} scale={0.14} />
      <mesh geometry={nodes.Plane161.geometry} material={materials.leaf} position={[5.34, 2.73, -6.64]} rotation={[0.64, -1.05, -2.48]} scale={0.17} />
      <mesh geometry={nodes.Plane162.geometry} material={materials.leaf} position={[5.08, 2.93, -6.02]} rotation={[1.64, -1.07, 1.76]} scale={0.17} />
      <mesh geometry={nodes.Plane163.geometry} material={materials.leaf} position={[5.41, 3.23, -5.97]} rotation={[-2.49, -0.74, 2.14]} scale={0.13} />
      <mesh geometry={nodes.Plane164.geometry} material={materials.leaf} position={[5.35, 2.92, -5.92]} rotation={[1.59, 1.37, 0.92]} scale={0.17} />
      <mesh geometry={nodes.Plane165.geometry} material={materials.leaf} position={[5.27, 2.66, -6.27]} rotation={[2.3, 0.64, 2.42]} scale={0.18} />
      <mesh geometry={nodes.Plane166.geometry} material={materials.leaf} position={[5.35, 3.11, -6.75]} rotation={[-0.42, 0.14, 1]} scale={0.11} />
      <mesh geometry={nodes.Plane167.geometry} material={materials.leaf} position={[5.34, 2.73, -6.64]} rotation={[-1.06, 0.65, -0.69]} scale={0.11} />
      <mesh geometry={nodes.Plane168.geometry} material={materials.leaf} position={[5.19, 2.7, -6.42]} rotation={[-2.73, 0.22, -3.09]} scale={0.14} />
      <mesh geometry={nodes.Plane169.geometry} material={materials.leaf} position={[5.29, 3.36, -6.23]} rotation={[-1.99, 0.93, 2.98]} scale={0.18} />
      <mesh geometry={nodes.Plane170.geometry} material={materials.leaf} position={[5.55, 3.13, -5.93]} rotation={[1.14, -0.26, 0.91]} scale={0.1} />
      <mesh geometry={nodes.Plane171.geometry} material={materials.leaf} position={[5.1, 2.75, -6.2]} rotation={[-3.07, 0.99, 2.17]} scale={0.1} />
      <mesh geometry={nodes.Plane172.geometry} material={materials.leaf} position={[5.16, 2.89, -5.97]} rotation={[2.87, -1.36, 2.92]} scale={0.17} />
      <mesh geometry={nodes.Plane173.geometry} material={materials.leaf} position={[4.96, 3.03, -6.26]} rotation={[-2.88, 0.01, 1.97]} scale={0.15} />
      <mesh geometry={nodes.Plane174.geometry} material={materials.leaf} position={[5.24, 3.14, -6.64]} rotation={[-2.42, 0.71, -2.81]} scale={0.15} />
      <mesh geometry={nodes.Plane175.geometry} material={materials.leaf} position={[5.6, 2.74, -6.09]} rotation={[2.45, -0.18, 2.16]} scale={0.12} />
      <mesh geometry={nodes.Plane176.geometry} material={materials.leaf} position={[5.21, 3.3, -6.18]} rotation={[3.09, 0.05, -0.76]} scale={0.16} />
      <mesh geometry={nodes.Plane177.geometry} material={materials.leaf} position={[5.1, 2.75, -6.2]} rotation={[-0.84, -0.93, -1.16]} scale={0.14} />
      <mesh geometry={nodes.Plane178.geometry} material={materials.leaf} position={[5.98, 2.84, -6.32]} rotation={[-0.3, -0.25, 0.22]} scale={0.19} />
      <mesh geometry={nodes.Plane179.geometry} material={materials.leaf} position={[5.24, 2.72, -6.58]} rotation={[1.67, -0.91, 0.34]} scale={0.13} />
      <mesh geometry={nodes.Plane180.geometry} material={materials.leaf} position={[5.91, 2.84, -6.23]} rotation={[-3.05, -0.92, 2.73]} scale={0.09} />
      <mesh geometry={nodes.Plane181.geometry} material={materials.leaf} position={[6.13, 3.2, -6.53]} rotation={[-0.17, 0.96, -0.44]} scale={0.15} />
      <mesh geometry={nodes.Plane182.geometry} material={materials.leaf} position={[5.67, 2.73, -6.14]} rotation={[-0.11, -0.04, -2.04]} scale={0.16} />
      <mesh geometry={nodes.Plane183.geometry} material={materials.leaf} position={[5.71, 3.02, -6.83]} rotation={[1.99, 0.99, -2.75]} scale={0.09} />
      <mesh geometry={nodes.Plane184.geometry} material={materials.leaf} position={[5.83, 3.16, -6.04]} rotation={[-0.84, 0.32, -0.67]} scale={0.1} />
      <mesh geometry={nodes.Plane185.geometry} material={materials.leaf} position={[5.91, 3.1, -6.07]} rotation={[1.5, 0.05, -0.64]} scale={0.13} />
      <mesh geometry={nodes.Plane186.geometry} material={materials.leaf} position={[5.51, 3.04, -5.93]} rotation={[1.17, -0.51, 1.09]} scale={0.1} />
      <mesh geometry={nodes.Plane187.geometry} material={materials.leaf} position={[5.61, 3.15, -6.81]} rotation={[-2.1, -0.46, -0.09]} scale={0.13} />
      <mesh geometry={nodes.Plane188.geometry} material={materials.leaf} position={[6.08, 3.25, -6.5]} rotation={[-0.11, -0.28, 0.26]} scale={0.19} />
      <mesh geometry={nodes.Plane189.geometry} material={materials.leaf} position={[5.14, 3.03, -6.62]} rotation={[-1.24, -0.41, 1.22]} scale={0.12} />
      <mesh geometry={nodes.Plane190.geometry} material={materials.leaf} position={[5.56, 3.02, -6.82]} rotation={[-2.13, 0.39, 0.46]} scale={0.09} />
      <mesh geometry={nodes.Plane191.geometry} material={materials.leaf} position={[5.51, 3.25, -6.72]} rotation={[2.92, 0.32, -1.82]} scale={0.17} />
      <mesh geometry={nodes.Plane192.geometry} material={materials.leaf} position={[5.43, 2.8, -6.01]} rotation={[1.79, 0.23, 0.01]} scale={0.13} />
      <mesh geometry={nodes.Plane193.geometry} material={materials.leaf} position={[5.1, 3.16, -6.06]} rotation={[-1.07, -0.45, 1.9]} scale={0.1} />
      <mesh geometry={nodes.Plane194.geometry} material={materials.leaf} position={[5.12, 3.13, -6.57]} rotation={[2.22, 0.48, 2.32]} scale={0.13} />
      <mesh geometry={nodes.Plane195.geometry} material={materials.leaf} position={[5.66, 3.41, -6.45]} rotation={[-0.61, -0.54, 2.8]} scale={0.19} />
      <mesh geometry={nodes.Plane196.geometry} material={materials.leaf} position={[5.35, 2.78, -6.7]} rotation={[1.35, 0.71, -2.75]} scale={0.19} />
      <mesh geometry={nodes.Plane197.geometry} material={materials.leaf} position={[5.06, 3.12, -6.49]} rotation={[1.7, 0.53, 3.08]} scale={0.13} />
      <mesh geometry={nodes.Plane198.geometry} material={materials.leaf} position={[5.15, 2.88, -6.63]} rotation={[1.44, 0.85, -2.64]} scale={0.19} />
      <mesh geometry={nodes.Plane199.geometry} material={materials.leaf} position={[5.06, 2.76, -6.4]} rotation={[1.49, -0.77, 1.73]} scale={0.1} />
      <mesh geometry={nodes.Plane200.geometry} material={materials.leaf} position={[6.11, 3.11, -6.54]} rotation={[-0.51, 0.03, 0.2]} scale={0.17} />
      <mesh geometry={nodes.Plane201.geometry} material={materials.leaf} position={[5.98, 3.31, -6.47]} rotation={[-1, 1.11, 2.74]} scale={0.15} />
      <mesh geometry={nodes.Plane202.geometry} material={materials.leaf} position={[6, 3.15, -6.74]} rotation={[-0.92, 0.9, 0.92]} scale={0.15} />
      <mesh geometry={nodes.Plane203.geometry} material={materials.leaf} position={[5.94, 3.06, -6.77]} rotation={[-0.66, -0.44, 0.42]} scale={0.13} />
      <mesh geometry={nodes.Plane204.geometry} material={materials.leaf} position={[5.78, 2.71, -6.56]} rotation={[-0.12, 0.17, -0.19]} scale={0.1} />
      <mesh geometry={nodes.Plane205.geometry} material={materials.leaf} position={[5.56, 3.02, -6.82]} rotation={[2.93, -0.43, -0.58]} scale={0.11} />
      <mesh geometry={nodes.Plane206.geometry} material={materials.leaf} position={[5.03, 3.04, -6.03]} rotation={[0.53, -0.74, 0.97]} scale={0.17} />
      <mesh geometry={nodes.Plane207.geometry} material={materials.leaf} position={[5.69, 3.21, -6.01]} rotation={[-2.64, -0.26, -0.29]} scale={0.18} />
      <mesh geometry={nodes.Plane208.geometry} material={materials.leaf} position={[5.45, 2.63, -6.48]} rotation={[1.97, 0.25, -0.67]} scale={0.18} />
      <mesh geometry={nodes.Plane209.geometry} material={materials.leaf} position={[5.37, 2.81, -6.71]} rotation={[-2.65, 0.45, 2.42]} scale={0.16} />
      <mesh geometry={nodes.Plane210.geometry} material={materials.leaf} position={[5.98, 3.31, -6.47]} rotation={[-0.77, 0.96, 2.24]} scale={0.12} />
      <mesh geometry={nodes.Plane211.geometry} material={materials.leaf} position={[5.1, 3.16, -6.06]} rotation={[-1.58, 0.8, -1.45]} scale={0.12} />
      <mesh geometry={nodes.Plane212.geometry} material={materials.leaf} position={[6, 2.84, -6.58]} rotation={[0.93, 0.01, -1]} scale={0.2} />
      <mesh geometry={nodes.Plane213.geometry} material={materials.leaf} position={[5.31, 3.36, -6.32]} rotation={[2.49, -0.08, -2.44]} scale={0.09} />
      <mesh geometry={nodes.Plane214.geometry} material={materials.leaf} position={[5.45, 2.63, -6.48]} rotation={[-0.24, 0.7, -1.15]} scale={0.15} />
      <mesh geometry={nodes.Plane215.geometry} material={materials.leaf} position={[6, 3.18, -6.18]} rotation={[-1.14, 0.93, 0.89]} scale={0.15} />
      <mesh geometry={nodes.Plane216.geometry} material={materials.leaf} position={[5.29, 3.05, -5.93]} rotation={[-2.27, -1.19, -2.49]} scale={0.12} />
      <mesh geometry={nodes.Plane217.geometry} material={materials.leaf} position={[5.78, 2.81, -6.11]} rotation={[1, -0.29, -0.89]} scale={0.09} />
      <mesh geometry={nodes.Plane218.geometry} material={materials.leaf} position={[5.04, 2.85, -6.11]} rotation={[0.83, 0.37, 2.28]} scale={0.13} />
      <mesh geometry={nodes.Plane219.geometry} material={materials.leaf} position={[5.77, 3.4, -6.36]} rotation={[-1.97, 0.13, 0.62]} scale={0.1} />
      <mesh geometry={nodes.Plane220.geometry} material={materials.leaf} position={[6.01, 3, -6.18]} rotation={[2.12, -0.29, 0.12]} scale={0.15} />
      <mesh geometry={nodes.Plane221.geometry} material={materials.leaf} position={[5.06, 3.12, -6.49]} rotation={[2.95, -0.08, 2.46]} scale={0.18} />
      <mesh geometry={nodes.Plane222.geometry} material={materials.leaf} position={[4.99, 2.9, -6.4]} rotation={[1.08, -0.17, 2.55]} scale={0.17} />
      <mesh geometry={nodes.Plane223.geometry} material={materials.leaf} position={[5.17, 2.94, -5.94]} rotation={[0.06, -1.09, 0.42]} scale={0.11} />
      <mesh geometry={nodes.Plane224.geometry} material={materials.leaf} position={[5.6, 3.26, -6.71]} rotation={[2.97, 0.29, -2.13]} scale={0.08} />
      <mesh geometry={nodes.Plane225.geometry} material={materials.leaf} position={[5.46, 2.66, -6.57]} rotation={[2.92, 0.66, -2.47]} scale={0.13} />
      <mesh geometry={nodes.Plane226.geometry} material={materials.leaf} position={[5.57, 3.42, -6.34]} rotation={[3.09, -0.8, -1.5]} scale={0.17} />
      <mesh geometry={nodes.Plane227.geometry} material={materials.leaf} position={[4.98, 2.85, -6.18]} rotation={[-0.93, -0.12, -2.75]} scale={0.1} />
      <mesh geometry={nodes.Plane228.geometry} material={materials.leaf} position={[5.47, 3.11, -6.78]} rotation={[0.48, 0.8, -0.73]} scale={0.13} />
      <mesh geometry={nodes.Plane229.geometry} material={materials.leaf} position={[4.99, 3.14, -6.32]} rotation={[0.01, 0.27, 2.59]} scale={0.08} />
      <mesh geometry={nodes.Plane230.geometry} material={materials.leaf} position={[5.94, 3.06, -6.77]} rotation={[0.44, 0.82, -1.94]} scale={0.18} />
      <mesh geometry={nodes.Plane231.geometry} material={materials.leaf} position={[5.55, 2.69, -6.15]} rotation={[-0.5, -0.69, 0.16]} scale={0.13} />
      <mesh geometry={nodes.Plane232.geometry} material={materials.leaf} position={[5.54, 3.39, -6.52]} rotation={[-2.68, 0.35, -0.63]} scale={0.19} />
      <mesh geometry={nodes.Plane233.geometry} material={materials.leaf} position={[5.87, 3.33, -6.59]} rotation={[2.73, 0.5, -2.1]} scale={0.14} />
      <mesh geometry={nodes.Plane234.geometry} material={materials.leaf} position={[5.49, 2.75, -6.69]} rotation={[1.01, -0.12, -2.83]} scale={0.19} />
      <mesh geometry={nodes.Plane235.geometry} material={materials.leaf} position={[6.04, 3.26, -6.57]} rotation={[-0.05, -0.46, 0.29]} scale={0.11} />
      <mesh geometry={nodes.Plane236.geometry} material={materials.leaf} position={[5.04, 2.85, -6.11]} rotation={[3.1, -0.54, -2.31]} scale={0.13} />
      <mesh geometry={nodes.Plane237.geometry} material={materials.leaf} position={[6.07, 2.96, -6.32]} rotation={[0.38, 1.22, 0.63]} scale={0.11} />
      <mesh geometry={nodes.Plane238.geometry} material={materials.leaf} position={[6.03, 2.93, -6.64]} rotation={[0.87, 1, -0.34]} scale={0.18} />
      <mesh geometry={nodes.Plane239.geometry} material={materials.leaf} position={[5.7, 3.32, -6.1]} rotation={[-0.84, -0.1, 1.41]} scale={0.09} />
      <mesh geometry={nodes.Plane240.geometry} material={materials.leaf} position={[5.24, 3.14, -6.64]} rotation={[0.03, 1.37, -0.75]} scale={0.09} />
      <mesh geometry={nodes.Plane241.geometry} material={materials.leaf} position={[5.25, 2.84, -5.96]} rotation={[2.3, -0.89, 2.99]} scale={0.1} />
      <mesh geometry={nodes.Plane242.geometry} material={materials.leaf} position={[5.69, 3.37, -6.59]} rotation={[-2.52, 0.12, -0.71]} scale={0.09} />
      <mesh geometry={nodes.Plane243.geometry} material={materials.leaf} position={[6, 3.03, -6.7]} rotation={[-1.52, -0.09, -0.18]} scale={0.12} />
      <mesh geometry={nodes.Plane244.geometry} material={materials.leaf} position={[5.92, 3.2, -6.74]} rotation={[0.04, 0, -0.6]} scale={0.15} />
      <mesh geometry={nodes.Plane245.geometry} material={materials.leaf} position={[6.71, 2.3, -7.41]} rotation={[2.79, 0.95, 2.16]} scale={0.13} />
      <mesh geometry={nodes.Plane246.geometry} material={materials.leaf} position={[6.15, 2.35, -7.46]} rotation={[-1.82, -1.12, -1.33]} scale={0.18} />
      <mesh geometry={nodes.Plane247.geometry} material={materials.leaf} position={[6.33, 2.52, -7.28]} rotation={[1.78, 0.44, -1.52]} scale={0.15} />
      <mesh geometry={nodes.Plane248.geometry} material={materials.leaf} position={[6.4, 2.51, -7.23]} rotation={[-2.12, -0.73, -1.54]} scale={0.12} />
      <mesh geometry={nodes.Plane249.geometry} material={materials.leaf} position={[6.82, 2.34, -7.2]} rotation={[1.1, -0.24, 0.21]} scale={0.17} />
      <mesh geometry={nodes.Plane250.geometry} material={materials.leaf} position={[6.65, 2.47, -7.45]} rotation={[3.12, -0.67, -1.83]} scale={0.13} />
      <mesh geometry={nodes.Plane251.geometry} material={materials.leaf} position={[6.21, 2.46, -7.34]} rotation={[2.76, -0.1, 2.1]} scale={0.18} />
      <mesh geometry={nodes.Plane252.geometry} material={materials.leaf} position={[6.22, 2.3, -7.35]} rotation={[-1.11, 0.14, 2.78]} scale={0.18} />
      <mesh geometry={nodes.Plane253.geometry} material={materials.leaf} position={[6.7, 2.57, -7.34]} rotation={[0.77, -0.24, -0.41]} scale={0.14} />
      <mesh geometry={nodes.Plane254.geometry} material={materials.leaf} position={[6.84, 2.5, -7.21]} rotation={[-0.03, -0.4, -0.21]} scale={0.13} />
      <mesh geometry={nodes.Plane255.geometry} material={materials.leaf} position={[6.24, 2.5, -7.36]} rotation={[-3.05, 0.68, -3.09]} scale={0.18} />
      <mesh geometry={nodes.Plane256.geometry} material={materials.leaf} position={[6.5, 2.54, -7.21]} rotation={[1.06, 0.81, 2.49]} scale={0.08} />
      <mesh geometry={nodes.Plane257.geometry} material={materials.leaf} position={[6.63, 2.41, -7.14]} rotation={[-1.1, -0.48, -2.31]} scale={0.08} />
      <mesh geometry={nodes.Plane258.geometry} material={materials.leaf} position={[6.32, 2.41, -7.25]} rotation={[3.14, -0.93, 2.66]} scale={0.18} />
      <mesh geometry={nodes.Plane259.geometry} material={materials.leaf} position={[6.44, 2.46, -7.52]} rotation={[-1.22, 0.76, 0.06]} scale={0.15} />
      <mesh geometry={nodes.Plane260.geometry} material={materials.leaf} position={[6.15, 2.34, -7.48]} rotation={[-2.55, 1.26, 1.98]} scale={0.15} />
      <mesh geometry={nodes.Plane261.geometry} material={materials.leaf} position={[6.59, 2.23, -7.45]} rotation={[-3.03, 0.07, 2.1]} scale={0.1} />
      <mesh geometry={nodes.Plane262.geometry} material={materials.leaf} position={[6.79, 2.43, -7.15]} rotation={[-0.98, -0.45, 0.07]} scale={0.18} />
      <mesh geometry={nodes.Plane263.geometry} material={materials.leaf} position={[6.21, 2.26, -7.37]} rotation={[2.44, -0.32, -1.67]} scale={0.15} />
      <mesh geometry={nodes.Plane264.geometry} material={materials.leaf} position={[6.5, 2.21, -7.28]} rotation={[0, -0.36, 0.04]} scale={0.19} />
      <mesh geometry={nodes.Plane265.geometry} material={materials.leaf} position={[6.68, 2.37, -7.15]} rotation={[-1.11, 0.18, -2.69]} scale={0.13} />
      <mesh geometry={nodes.Plane266.geometry} material={materials.leaf} position={[6.71, 2.3, -7.41]} rotation={[-2.61, -0.73, -1.47]} scale={0.15} />
      <mesh geometry={nodes.Plane267.geometry} material={materials.leaf} position={[6.28, 2.21, -7.43]} rotation={[3, -0.52, 0.31]} scale={0.09} />
      <mesh geometry={nodes.Plane268.geometry} material={materials.leaf} position={[6.76, 2.41, -7.4]} rotation={[2.42, -0.2, -0.88]} scale={0.1} />
      <mesh geometry={nodes.Plane269.geometry} material={materials.leaf} position={[6.48, 2.2, -7.3]} rotation={[1.57, -0.56, 0.45]} scale={0.18} />
      <mesh geometry={nodes.Plane270.geometry} material={materials.leaf} position={[6.82, 2.52, -7.22]} rotation={[-0.11, 0.63, 1.46]} scale={0.12} />
      <mesh geometry={nodes.Plane271.geometry} material={materials.leaf} position={[6.18, 2.46, -7.41]} rotation={[0.38, 0.65, -1.41]} scale={0.16} />
      <mesh geometry={nodes.Plane272.geometry} material={materials.leaf} position={[6.61, 2.42, -7.48]} rotation={[-1.94, 0.77, 2.63]} scale={0.09} />
      <mesh geometry={nodes.Plane273.geometry} material={materials.leaf} position={[6.24, 2.4, -7.31]} rotation={[-3.06, -0.7, 2.18]} scale={0.13} />
      <mesh geometry={nodes.Plane274.geometry} material={materials.leaf} position={[6.79, 2.43, -7.15]} rotation={[0.1, 1.1, -2.56]} scale={0.2} />
      <mesh geometry={nodes.Plane275.geometry} material={materials.leaf} position={[6.53, 2.24, -7.48]} rotation={[0.2, -0.26, -0.73]} scale={0.08} />
      <mesh geometry={nodes.Plane276.geometry} material={materials.leaf} position={[6.28, 2.21, -7.43]} rotation={[2.78, -0.28, 1.62]} scale={0.17} />
      <mesh geometry={nodes.Plane277.geometry} material={materials.leaf} position={[6.55, 2.37, -7.17]} rotation={[1.43, 0.11, 2.41]} scale={0.09} />
      <mesh geometry={nodes.Plane278.geometry} material={materials.leaf} position={[6.51, 2.3, -7.51]} rotation={[-1.54, 0.34, 0.94]} scale={0.16} />
      <mesh geometry={nodes.Plane279.geometry} material={materials.leaf} position={[6.72, 2.52, -7.17]} rotation={[1.68, 0.45, 0.22]} scale={0.17} />
      <mesh geometry={nodes.Plane280.geometry} material={materials.leaf} position={[6.28, 2.24, -7.33]} rotation={[2.67, 0.73, -2.27]} scale={0.19} />
      <mesh geometry={nodes.Plane281.geometry} material={materials.leaf} position={[6.54, 2.19, -7.3]} rotation={[-2.41, -0.09, -2.74]} scale={0.15} />
      <mesh geometry={nodes.Plane282.geometry} material={materials.leaf} position={[6.74, 2.29, -7.2]} rotation={[1.96, -0.91, 0.53]} scale={0.13} />
      <mesh geometry={nodes.Plane283.geometry} material={materials.leaf} position={[6.59, 2.58, -7.38]} rotation={[-0.26, 0.51, 2.36]} scale={0.19} />
      <mesh geometry={nodes.Plane284.geometry} material={materials.leaf} position={[6.87, 2.49, -7.23]} rotation={[1.12, -0.62, -0.03]} scale={0.19} />
      <mesh geometry={nodes.Plane285.geometry} material={materials.leaf} position={[6.75, 2.25, -7.29]} rotation={[1.87, -0.64, 0.94]} scale={0.18} />
      <mesh geometry={nodes.Plane286.geometry} material={materials.leaf} position={[6.5, 2.58, -7.42]} rotation={[1.8, -0.49, -2.8]} scale={0.17} />
      <mesh geometry={nodes.Plane287.geometry} material={materials.leaf} position={[6.76, 2.29, -7.37]} rotation={[-2.26, -0.38, -0.05]} scale={0.1} />
      <mesh geometry={nodes.Plane288.geometry} material={materials.leaf} position={[6.49, 2.35, -7.52]} rotation={[1.45, 0.82, -0.34]} scale={0.14} />
      <mesh geometry={nodes.Plane289.geometry} material={materials.leaf} position={[6.29, 2.55, -7.38]} rotation={[-2.99, 0.99, -2.58]} scale={0.13} />
      <mesh geometry={nodes.Plane290.geometry} material={materials.leaf} position={[6.63, 2.2, -7.33]} rotation={[3.06, 1.19, 2.11]} scale={0.1} />
      <mesh geometry={nodes.Plane291.geometry} material={materials.leaf} position={[6.22, 2.3, -7.35]} rotation={[-1.45, -0.46, 2.95]} scale={0.17} />
      <mesh geometry={nodes.Plane292.geometry} material={materials.leaf} position={[6.23, 2.5, -7.48]} rotation={[1.35, -0.22, 2.72]} scale={0.13} />
      <mesh geometry={nodes.Plane293.geometry} material={materials.leaf} position={[6.27, 2.51, -7.49]} rotation={[-0.97, -0.65, -3]} scale={0.18} />
      <mesh geometry={nodes.Plane294.geometry} material={materials.leaf} position={[6.17, 2.38, -7.49]} rotation={[-2.27, 0, -2.72]} scale={0.11} />
      <mesh geometry={nodes.Plane295.geometry} material={materials.leaf} position={[6.21, 2.28, -7.52]} rotation={[1.96, 1.11, -2.86]} scale={0.09} />
      <mesh geometry={nodes.Plane296.geometry} material={materials.leaf} position={[6.48, 2.18, -7.4]} rotation={[-0.22, 0.32, -1.18]} scale={0.11} />
      <mesh geometry={nodes.Plane297.geometry} material={materials.leaf} position={[6.43, 2.47, -7.52]} rotation={[1.34, 0.11, -0.67]} scale={0.14} />
      <mesh geometry={nodes.Plane298.geometry} material={materials.leaf} position={[6.87, 2.46, -7.18]} rotation={[0.79, -0.9, 1.97]} scale={0.13} />
      <mesh geometry={nodes.Plane299.geometry} material={materials.leaf} position={[6.54, 2.19, -7.3]} rotation={[-3.1, -0.54, 0.83]} scale={0.12} />
      <mesh geometry={nodes.Plane300.geometry} material={materials.leaf} position={[6.85, 2.46, -7.31]} rotation={[-0.31, 0.07, 0.99]} scale={0.15} />
      <mesh geometry={nodes.Plane301.geometry} material={materials.leaf} position={[6.84, 2.51, -7.28]} rotation={[-0.52, -0.4, -0.16]} scale={0.12} />
      <mesh geometry={nodes.Plane302.geometry} material={materials.leaf} position={[6.4, 2.51, -7.23]} rotation={[0.08, -0.68, 2.18]} scale={0.16} />
      <mesh geometry={nodes.Plane303.geometry} material={materials.leaf} position={[6.63, 2.29, -7.46]} rotation={[1.18, -0.8, 0.42]} scale={0.1} />
      <mesh geometry={nodes.Plane304.geometry} material={materials.leaf} position={[6.46, 2.25, -7.24]} rotation={[-0.53, -0.48, 3.06]} scale={0.08} />
      <mesh geometry={nodes.Plane305.geometry} material={materials.leaf} position={[6.48, 2.2, -7.3]} rotation={[2.57, -0.31, 2.37]} scale={0.12} />
      <mesh geometry={nodes.Plane306.geometry} material={materials.leaf} position={[6.17, 2.38, -7.49]} rotation={[-2.04, 0.41, 1.81]} scale={0.16} />
      <mesh geometry={nodes.Plane307.geometry} material={materials.leaf} position={[6.17, 2.32, -7.4]} rotation={[2.13, -0.03, 1.58]} scale={0.14} />
      <mesh geometry={nodes.Plane308.geometry} material={materials.leaf} position={[6.65, 2.61, -7.29]} rotation={[1.49, 1.3, -0.74]} scale={0.12} />
      <mesh geometry={nodes.Plane309.geometry} material={materials.leaf} position={[6.46, 2.4, -7.19]} rotation={[2.33, -1.06, 2.2]} scale={0.16} />
      <mesh geometry={nodes.Plane310.geometry} material={materials.leaf} position={[6.48, 2.57, -7.24]} rotation={[-2.97, 0.45, -2.34]} scale={0.18} />
      <mesh geometry={nodes.Plane311.geometry} material={materials.leaf} position={[6.53, 2.56, -7.44]} rotation={[1.81, -0.02, 1.19]} scale={0.11} />
      <mesh geometry={nodes.Plane312.geometry} material={materials.leaf} position={[6.42, 2.2, -7.32]} rotation={[-1.26, -0.49, 2.97]} scale={0.19} />
      <mesh geometry={nodes.Plane313.geometry} material={materials.leaf} position={[6.59, 2.58, -7.38]} rotation={[-1.33, 0.84, -0.08]} scale={0.13} />
      <mesh geometry={nodes.Plane314.geometry} material={materials.leaf} position={[6.35, 2.45, -7.54]} rotation={[-2.89, 1.13, 2.75]} scale={0.16} />
      <mesh geometry={nodes.Plane315.geometry} material={materials.leaf} position={[6.17, 2.38, -7.49]} rotation={[-1.84, -0.24, 1.44]} scale={0.1} />
      <mesh geometry={nodes.Plane316.geometry} material={materials.leaf} position={[6.68, 2.32, -7.17]} rotation={[-1.96, 0.91, -1.68]} scale={0.1} />
      <mesh geometry={nodes.Plane317.geometry} material={materials.leaf} position={[6.38, 2.28, -7.26]} rotation={[-2.17, 0.21, -2.3]} scale={0.13} />
      <mesh geometry={nodes.Plane318.geometry} material={materials.leaf} position={[6.33, 2.22, -7.49]} rotation={[3.07, 0.39, -2.21]} scale={0.13} />
      <mesh geometry={nodes.Plane319.geometry} material={materials.leaf} position={[6.24, 2.38, -7.31]} rotation={[3.08, 0.81, -1.75]} scale={0.18} />
      <mesh geometry={nodes.Plane320.geometry} material={materials.leaf} position={[6.63, 2.41, -7.14]} rotation={[1.5, 0.54, -0.27]} scale={0.16} />
      <mesh geometry={nodes.Plane321.geometry} material={materials.leaf} position={[6.86, 2.48, -7.18]} rotation={[2.54, 0.03, -0.33]} scale={0.11} />
      <mesh geometry={nodes.Plane322.geometry} material={materials.leaf} position={[6.82, 2.32, -7.21]} rotation={[-1.48, -0.44, -0.82]} scale={0.15} />
      <mesh geometry={nodes.Plane323.geometry} material={materials.leaf} position={[6.4, 2.51, -7.23]} rotation={[-1.25, -0.26, -2.58]} scale={0.18} />
      <mesh geometry={nodes.Plane324.geometry} material={materials.leaf} position={[6.85, 2.46, -7.31]} rotation={[0.37, 0.69, 1.83]} scale={0.14} />
      <mesh geometry={nodes.Plane325.geometry} material={materials.leaf} position={[6.17, 2.27, -7.44]} rotation={[3.13, 0.93, 2.14]} scale={0.13} />
      <mesh geometry={nodes.Plane326.geometry} material={materials.leaf} position={[6.76, 2.29, -7.37]} rotation={[0.71, 0.75, 0.62]} scale={0.15} />
      <mesh geometry={nodes.Plane327.geometry} material={materials.leaf} position={[6.43, 2.47, -7.52]} rotation={[-1.87, -0.02, 0.98]} scale={0.1} />
      <mesh geometry={nodes.Plane328.geometry} material={materials.leaf} position={[6.59, 2.58, -7.38]} rotation={[2.27, 0.26, 0.08]} scale={0.11} />
      <mesh geometry={nodes.Plane329.geometry} material={materials.leaf} position={[6.84, 2.41, -7.34]} rotation={[-1.04, 0.61, -1.66]} scale={0.19} />
      <mesh geometry={nodes.Plane330.geometry} material={materials.leaf} position={[6.32, 2.41, -7.25]} rotation={[-0.85, 0.29, -1.68]} scale={0.12} />
      <mesh geometry={nodes.Plane331.geometry} material={materials.leaf} position={[6.5, 2.58, -7.42]} rotation={[-2.7, 0.37, 2.82]} scale={0.15} />
      <mesh geometry={nodes.Plane332.geometry} material={materials.leaf} position={[6.87, 2.49, -7.23]} rotation={[-0.67, -0.26, 0.26]} scale={0.16} />
      <mesh geometry={nodes.Plane333.geometry} material={materials.leaf} position={[6.17, 2.33, -7.39]} rotation={[2.09, 0.48, -1.37]} scale={0.15} />
      <mesh geometry={nodes.Plane334.geometry} material={materials.leaf} position={[6.76, 2.41, -7.4]} rotation={[1.14, 1, 0.39]} scale={0.16} />
      <mesh geometry={nodes.Plane335.geometry} material={materials.leaf} position={[6.2, 2.29, -7.37]} rotation={[-1.82, 0.61, 1.53]} scale={0.19} />
      <mesh geometry={nodes.Plane336.geometry} material={materials.leaf} position={[6.63, 2.47, -7.46]} rotation={[1.85, -0.35, 0.1]} scale={0.18} />
      <mesh geometry={nodes.Plane337.geometry} material={materials.leaf} position={[6.26, 2.53, -7.42]} rotation={[-1.44, 0.26, -2.44]} scale={0.17} />
      <mesh geometry={nodes.Plane338.geometry} material={materials.leaf} position={[6.66, 2.61, -7.26]} rotation={[1.71, -1.01, 0.78]} scale={0.16} />
      <mesh geometry={nodes.Plane339.geometry} material={materials.leaf} position={[6.22, 2.42, -7.53]} rotation={[-1.55, -0.05, -2.11]} scale={0.13} />
      <mesh geometry={nodes.Plane340.geometry} material={materials.leaf} position={[6.72, 2.51, -7.16]} rotation={[-0.31, 0.46, -0.83]} scale={0.08} />
      <mesh geometry={nodes.Plane341.geometry} material={materials.leaf} position={[6.78, 2.52, -7.17]} rotation={[-0.45, 0.71, -0.62]} scale={0.19} />
      <mesh geometry={nodes.Plane342.geometry} material={materials.leaf} position={[6.7, 2.54, -7.38]} rotation={[-1.21, 1.1, 1.41]} scale={0.17} />
      <mesh geometry={nodes.Plane343.geometry} material={materials.leaf} position={[6.17, 2.27, -7.44]} rotation={[1.41, 0, 2.7]} scale={0.11} />
      <mesh geometry={nodes.Plane344.geometry} material={materials.leaf} position={[6.61, 2.42, -7.48]} rotation={[-2.23, -0.53, 1.81]} scale={0.12} />
      <mesh geometry={nodes.Plane345.geometry} material={materials.leaf} position={[6.53, 2.25, -7.49]} rotation={[1.85, -0.41, 2.54]} scale={0.11} />
      <mesh geometry={nodes.Plane346.geometry} material={materials.leaf} position={[6.56, 2.6, -7.25]} rotation={[-1.44, 0.58, 1.76]} scale={0.17} />
      <mesh geometry={nodes.Plane347.geometry} material={materials.leaf} position={[6.21, 2.48, -7.37]} rotation={[2.17, -0.48, 2.59]} scale={0.09} />
      <mesh geometry={nodes.Plane348.geometry} material={materials.leaf} position={[6.85, 2.46, -7.31]} rotation={[-1.74, -0.82, 0.87]} scale={0.18} />
      <mesh geometry={nodes.Plane349.geometry} material={materials.leaf} position={[6.28, 2.47, -7.29]} rotation={[2.97, -1.22, 2.72]} scale={0.18} />
      <mesh geometry={nodes.Plane350.geometry} material={materials.leaf} position={[6.85, 2.37, -7.21]} rotation={[-0.07, -0.06, 0.63]} scale={0.19} />
      <mesh geometry={nodes.Plane351.geometry} material={materials.leaf} position={[6.19, 2.47, -7.41]} rotation={[3.01, 0.84, 1.68]} scale={0.13} />
      <mesh geometry={nodes.Plane352.geometry} material={materials.leaf} position={[6.69, 2.22, -7.29]} rotation={[1.31, 0.04, 0.73]} scale={0.14} />
      <mesh geometry={nodes.Plane353.geometry} material={materials.leaf} position={[6.54, 2.19, -7.3]} rotation={[-0.71, -0.48, 0.26]} scale={0.12} />
      <mesh geometry={nodes.Plane354.geometry} material={materials.leaf} position={[6.89, 2.43, -7.26]} rotation={[0.45, -0.11, 0.25]} scale={0.16} />
      <mesh geometry={nodes.Plane355.geometry} material={materials.leaf} position={[6.75, 2.56, -7.22]} rotation={[-0.96, -0.65, -0.1]} scale={0.09} />
      <mesh geometry={nodes.Plane356.geometry} material={materials.leaf} position={[6.54, 2.19, -7.3]} rotation={[0.26, -0.64, 0.84]} scale={0.17} />
      <mesh geometry={nodes.Plane357.geometry} material={materials.leaf} position={[6.17, 2.38, -7.49]} rotation={[-3.09, 0.27, 1.56]} scale={0.09} />
      <mesh geometry={nodes.Plane358.geometry} material={materials.leaf} position={[6.29, 2.55, -7.38]} rotation={[-1.23, 1.48, 2.62]} scale={0.15} />
      <mesh geometry={nodes.Plane359.geometry} material={materials.leaf} position={[6.63, 2.41, -7.14]} rotation={[-0.5, 0.3, 0.39]} scale={0.15} />
      <mesh geometry={nodes.Plane360.geometry} material={materials.leaf} position={[6.88, 2.38, -7.22]} rotation={[1.93, 0.85, -0.54]} scale={0.12} />
      <mesh geometry={nodes.Plane361.geometry} material={materials.leaf} position={[6.67, 2.59, -7.23]} rotation={[1.9, 0.08, -0.93]} scale={0.13} />
      <mesh geometry={nodes.Plane362.geometry} material={materials.leaf} position={[6.87, 2.36, -7.22]} rotation={[-0.71, -1.43, -0.21]} scale={0.15} />
      <mesh geometry={nodes.Plane363.geometry} material={materials.leaf} position={[6.46, 2.4, -7.19]} rotation={[-3.08, 0.55, -2.1]} scale={0.19} />
      <mesh geometry={nodes.Plane364.geometry} material={materials.leaf} position={[6.75, 2.56, -7.22]} rotation={[1.04, -0.8, 0.85]} scale={0.12} />
      <mesh geometry={nodes.Plane365.geometry} material={materials.leaf} position={[5.12, 2.4, -8.43]} rotation={[2.02, 0.57, -1.78]} scale={0.18} />
      <mesh geometry={nodes.Plane366.geometry} material={materials.leaf} position={[5.84, 2.25, -8.79]} rotation={[0.53, -0.73, -0.63]} scale={0.18} />
      <mesh geometry={nodes.Plane367.geometry} material={materials.leaf} position={[5.65, 2.52, -8.13]} rotation={[1.88, -0.13, -0.84]} scale={0.1} />
      <mesh geometry={nodes.Plane368.geometry} material={materials.leaf} position={[5.51, 2.46, -8.08]} rotation={[0.38, -0.84, -0.55]} scale={0.17} />
      <mesh geometry={nodes.Plane369.geometry} material={materials.leaf} position={[5.74, 2.11, -8.65]} rotation={[1.27, 0.63, -1.91]} scale={0.11} />
      <mesh geometry={nodes.Plane370.geometry} material={materials.leaf} position={[5.71, 2.08, -8.59]} rotation={[0.07, -0.45, -1.46]} scale={0.08} />
      <mesh geometry={nodes.Plane371.geometry} material={materials.leaf} position={[5.59, 2.36, -8.85]} rotation={[0.43, 0.45, -0.38]} scale={0.09} />
      <mesh geometry={nodes.Plane372.geometry} material={materials.leaf} position={[5.74, 2.11, -8.65]} rotation={[-1.07, 0.07, -1.02]} scale={0.19} />
      <mesh geometry={nodes.Plane373.geometry} material={materials.leaf} position={[5.91, 2.19, -8.69]} rotation={[-3.11, -0.07, 0.98]} scale={0.11} />
      <mesh geometry={nodes.Plane374.geometry} material={materials.leaf} position={[5.52, 2.79, -8.57]} rotation={[2.64, 0.51, -2.36]} scale={0.16} />
      <mesh geometry={nodes.Plane375.geometry} material={materials.leaf} position={[5.89, 2.51, -8.4]} rotation={[0.67, -0.44, 2.3]} scale={0.19} />
      <mesh geometry={nodes.Plane376.geometry} material={materials.leaf} position={[5.65, 2.52, -8.13]} rotation={[-0.44, 0.18, 0.29]} scale={0.1} />
      <mesh geometry={nodes.Plane377.geometry} material={materials.leaf} position={[5.77, 2.7, -8.43]} rotation={[0.1, 0.44, -0.34]} scale={0.17} />
      <mesh geometry={nodes.Plane378.geometry} material={materials.leaf} position={[5.56, 2.07, -8.5]} rotation={[-0.35, -0.11, -2.99]} scale={0.12} />
      <mesh geometry={nodes.Plane379.geometry} material={materials.leaf} position={[5.24, 2.59, -8.65]} rotation={[-3.03, -0.6, 2.19]} scale={0.11} />
      <mesh geometry={nodes.Plane380.geometry} material={materials.leaf} position={[5.83, 2.43, -8.82]} rotation={[-0.6, -0.41, 0.42]} scale={0.11} />
      <mesh geometry={nodes.Plane381.geometry} material={materials.leaf} position={[5.77, 2.11, -8.56]} rotation={[2.32, -0.43, 0.61]} scale={0.09} />
      <mesh geometry={nodes.Plane382.geometry} material={materials.leaf} position={[5.61, 2.16, -8.27]} rotation={[0.14, 0.54, 0.02]} scale={0.14} />
      <mesh geometry={nodes.Plane383.geometry} material={materials.leaf} position={[5.17, 2.36, -8.2]} rotation={[1.69, 0.34, 2.2]} scale={0.1} />
      <mesh geometry={nodes.Plane384.geometry} material={materials.leaf} position={[5.68, 2.28, -8.84]} rotation={[1.24, 0.91, -1.07]} scale={0.14} />
      <mesh geometry={nodes.Plane385.geometry} material={materials.leaf} position={[5.65, 2.16, -8.29]} rotation={[2.08, -0.66, 1.71]} scale={0.09} />
      <mesh geometry={nodes.Plane386.geometry} material={materials.leaf} position={[5.77, 2.23, -8.82]} rotation={[2.48, 0.61, -1.57]} scale={0.1} />
      <mesh geometry={nodes.Plane387.geometry} material={materials.leaf} position={[5.74, 2.11, -8.65]} rotation={[-1.48, 1.42, 0.11]} scale={0.1} />
      <mesh geometry={nodes.Plane388.geometry} material={materials.leaf} position={[5.71, 2.22, -8.83]} rotation={[-2.88, 0.58, -3.14]} scale={0.14} />
      <mesh geometry={nodes.Plane389.geometry} material={materials.leaf} position={[5.93, 2.28, -8.71]} rotation={[-0.32, -0.59, -1.39]} scale={0.13} />
      <mesh geometry={nodes.Plane390.geometry} material={materials.leaf} position={[5.42, 2.15, -8.29]} rotation={[1.95, -0.75, 1.73]} scale={0.15} />
      <mesh geometry={nodes.Plane391.geometry} material={materials.leaf} position={[5.21, 2.61, -8.6]} rotation={[2.44, -0.15, -1.68]} scale={0.15} />
      <mesh geometry={nodes.Plane392.geometry} material={materials.leaf} position={[5.61, 2.58, -8.13]} rotation={[-0.42, -0.55, -0.35]} scale={0.19} />
      <mesh geometry={nodes.Plane393.geometry} material={materials.leaf} position={[5.75, 2.71, -8.56]} rotation={[-0.89, 0.65, -0.12]} scale={0.13} />
      <mesh geometry={nodes.Plane394.geometry} material={materials.leaf} position={[5.44, 2.83, -8.33]} rotation={[1.16, -0.69, -2.81]} scale={0.18} />
      <mesh geometry={nodes.Plane395.geometry} material={materials.leaf} position={[5.77, 2.14, -8.43]} rotation={[-0.1, 0.49, -2.55]} scale={0.19} />
      <mesh geometry={nodes.Plane396.geometry} material={materials.leaf} position={[5.54, 2.68, -8.15]} rotation={[-0.35, -0.71, 0.84]} scale={0.12} />
      <mesh geometry={nodes.Plane397.geometry} material={materials.leaf} position={[5.15, 2.68, -8.18]} rotation={[2.49, 0.82, 2.54]} scale={0.12} />
      <mesh geometry={nodes.Plane398.geometry} material={materials.leaf} position={[5.59, 2.4, -8.11]} rotation={[0.64, -1.22, 1.91]} scale={0.14} />
      <mesh geometry={nodes.Plane399.geometry} material={materials.leaf} position={[5.3, 2.62, -8.66]} rotation={[2.84, -0.43, -0.36]} scale={0.14} />
      <mesh geometry={nodes.Plane400.geometry} material={materials.leaf} position={[5.73, 2.3, -8.22]} rotation={[-3.08, -1.36, -3.08]} scale={0.09} />
      <mesh geometry={nodes.Plane401.geometry} material={materials.leaf} position={[5.31, 2.54, -8.7]} rotation={[-3.08, 0.21, 1.96]} scale={0.13} />
      <mesh geometry={nodes.Plane402.geometry} material={materials.leaf} position={[5.89, 2.51, -8.4]} rotation={[-1.2, -0.28, 1.36]} scale={0.14} />
      <mesh geometry={nodes.Plane403.geometry} material={materials.leaf} position={[5.9, 2.58, -8.56]} rotation={[1.32, 0.52, 0.8]} scale={0.18} />
      <mesh geometry={nodes.Plane404.geometry} material={materials.leaf} position={[5.49, 2.09, -8.44]} rotation={[-1.69, 0.52, 0.66]} scale={0.1} />
      <mesh geometry={nodes.Plane405.geometry} material={materials.leaf} position={[5.74, 2.11, -8.65]} rotation={[-0.13, -0.63, 0.18]} scale={0.09} />
      <mesh geometry={nodes.Plane406.geometry} material={materials.leaf} position={[5.71, 2.22, -8.83]} rotation={[-2.14, -1.06, 1.02]} scale={0.13} />
      <mesh geometry={nodes.Plane407.geometry} material={materials.leaf} position={[5.51, 2.56, -8.08]} rotation={[1.54, 0.23, 2.14]} scale={0.2} />
      <mesh geometry={nodes.Plane408.geometry} material={materials.leaf} position={[5.23, 2.27, -8.25]} rotation={[-1.24, -0.12, 2.7]} scale={0.16} />
      <mesh geometry={nodes.Plane409.geometry} material={materials.leaf} position={[5.48, 2.73, -8.14]} rotation={[0.83, 0.22, 1.22]} scale={0.15} />
      <mesh geometry={nodes.Plane410.geometry} material={materials.leaf} position={[5.83, 2.62, -8.66]} rotation={[-0.84, 0.09, 0.19]} scale={0.15} />
      <mesh geometry={nodes.Plane411.geometry} material={materials.leaf} position={[5.35, 2.29, -8.7]} rotation={[-2.12, -0.51, 0.75]} scale={0.15} />
      <mesh geometry={nodes.Plane412.geometry} material={materials.leaf} position={[5.91, 2.25, -8.74]} rotation={[1.37, 0.93, -0.52]} scale={0.16} />
      <mesh geometry={nodes.Plane413.geometry} material={materials.leaf} position={[5.27, 2.47, -8.07]} rotation={[-1.83, 0.9, -2.39]} scale={0.1} />
      <mesh geometry={nodes.Plane414.geometry} material={materials.leaf} position={[5.19, 2.4, -8.57]} rotation={[-0.42, 1.38, 2.29]} scale={0.18} />
      <mesh geometry={nodes.Plane415.geometry} material={materials.leaf} position={[5.24, 2.59, -8.65]} rotation={[1.1, 0.88, -1.35]} scale={0.19} />
      <mesh geometry={nodes.Plane416.geometry} material={materials.leaf} position={[5.94, 2.47, -8.55]} rotation={[0.47, 1.12, 0.7]} scale={0.13} />
      <mesh geometry={nodes.Plane417.geometry} material={materials.leaf} position={[5.63, 2.09, -8.61]} rotation={[3.08, 0.75, 1.43]} scale={0.15} />
      <mesh geometry={nodes.Plane418.geometry} material={materials.leaf} position={[5.75, 2.5, -8.85]} rotation={[-2.22, -1.06, -0.46]} scale={0.09} />
      <mesh geometry={nodes.Plane419.geometry} material={materials.leaf} position={[5.75, 2.15, -8.75]} rotation={[-0.26, -1.19, -1.35]} scale={0.12} />
      <mesh geometry={nodes.Plane420.geometry} material={materials.leaf} position={[5.42, 2.15, -8.29]} rotation={[1.67, 0.82, 1.25]} scale={0.18} />
      <mesh geometry={nodes.Plane421.geometry} material={materials.leaf} position={[5.91, 2.46, -8.39]} rotation={[-1.89, -0.42, 1.06]} scale={0.14} />
      <mesh geometry={nodes.Plane422.geometry} material={materials.leaf} position={[5.86, 2.16, -8.64]} rotation={[-1.72, -0.66, -0.03]} scale={0.11} />
      <mesh geometry={nodes.Plane423.geometry} material={materials.leaf} position={[5.39, 2.16, -8.6]} rotation={[2.28, 1.29, 2.78]} scale={0.13} />
      <mesh geometry={nodes.Plane424.geometry} material={materials.leaf} position={[5.17, 2.59, -8.57]} rotation={[-1, 0.52, 2.14]} scale={0.15} />
      <mesh geometry={nodes.Plane425.geometry} material={materials.leaf} position={[5.51, 2.46, -8.08]} rotation={[1.82, -0.39, 0.83]} scale={0.17} />
      <mesh geometry={nodes.Plane426.geometry} material={materials.leaf} position={[5.85, 2.62, -8.47]} rotation={[-0.68, -0.6, 0.27]} scale={0.08} />
      <mesh geometry={nodes.Plane427.geometry} material={materials.leaf} position={[5.97, 2.33, -8.63]} rotation={[-0.91, -0.08, -0.07]} scale={0.17} />
      <mesh geometry={nodes.Plane428.geometry} material={materials.leaf} position={[5.59, 2.36, -8.85]} rotation={[2.06, 0.66, -1.54]} scale={0.14} />
      <mesh geometry={nodes.Plane429.geometry} material={materials.leaf} position={[5.72, 2.52, -8.2]} rotation={[2, 0.85, -1]} scale={0.11} />
      <mesh geometry={nodes.Plane430.geometry} material={materials.leaf} position={[5.37, 2.13, -8.48]} rotation={[2.88, 0.34, 1.92]} scale={0.18} />
      <mesh geometry={nodes.Plane431.geometry} material={materials.leaf} position={[5.13, 2.41, -8.22]} rotation={[0.14, -0.53, 2.29]} scale={0.11} />
      <mesh geometry={nodes.Plane432.geometry} material={materials.leaf} position={[5.78, 2.29, -8.28]} rotation={[0.14, 0.11, -0.21]} scale={0.16} />
      <mesh geometry={nodes.Plane433.geometry} material={materials.leaf} position={[5.22, 2.34, -8.6]} rotation={[2.9, -1, -3.01]} scale={0.19} />
      <mesh geometry={nodes.Plane434.geometry} material={materials.leaf} position={[5.31, 2.54, -8.7]} rotation={[-1.64, 1.16, 2.61]} scale={0.1} />
      <mesh geometry={nodes.Plane435.geometry} material={materials.leaf} position={[5.7, 2.55, -8.82]} rotation={[-1.59, 1.05, -2.89]} scale={0.11} />
      <mesh geometry={nodes.Plane436.geometry} material={materials.leaf} position={[5.41, 2.12, -8.56]} rotation={[-3.05, 0.29, 0.88]} scale={0.13} />
      <mesh geometry={nodes.Plane437.geometry} material={materials.leaf} position={[5.62, 2.25, -8.19]} rotation={[-1.66, -1.09, -1.05]} scale={0.18} />
      <mesh geometry={nodes.Plane438.geometry} material={materials.leaf} position={[5.13, 2.55, -8.18]} rotation={[-0.21, -1.27, -0.5]} scale={0.13} />
      <mesh geometry={nodes.Plane439.geometry} material={materials.leaf} position={[5.71, 2.08, -8.59]} rotation={[-0.31, 0.12, -1.85]} scale={0.1} />
      <mesh geometry={nodes.Plane440.geometry} material={materials.leaf} position={[5.93, 2.28, -8.71]} rotation={[-1.02, -0.1, 1.28]} scale={0.16} />
      <mesh geometry={nodes.Plane441.geometry} material={materials.leaf} position={[5.67, 2.71, -8.28]} rotation={[3.05, -0.27, 2.73]} scale={0.2} />
      <mesh geometry={nodes.Plane442.geometry} material={materials.leaf} position={[5.16, 2.72, -8.36]} rotation={[0.75, -0.5, 3.02]} scale={0.1} />
      <mesh geometry={nodes.Plane443.geometry} material={materials.leaf} position={[5.56, 2.53, -8.83]} rotation={[-3.04, 0.69, 2.78]} scale={0.14} />
      <mesh geometry={nodes.Plane444.geometry} material={materials.leaf} position={[5.72, 2.36, -8.2]} rotation={[1.89, -0.59, 1.58]} scale={0.14} />
      <mesh geometry={nodes.Plane445.geometry} material={materials.leaf} position={[5.64, 2.29, -8.17]} rotation={[2.64, -0.92, -2.7]} scale={0.13} />
      <mesh geometry={nodes.Plane446.geometry} material={materials.leaf} position={[5.61, 2.58, -8.13]} rotation={[2.3, -1.05, 1.38]} scale={0.16} />
      <mesh geometry={nodes.Plane447.geometry} material={materials.leaf} position={[5.13, 2.37, -8.3]} rotation={[-0.54, -1.06, -0.33]} scale={0.09} />
      <mesh geometry={nodes.Plane448.geometry} material={materials.leaf} position={[5.9, 2.58, -8.56]} rotation={[3.07, 0.27, -1.55]} scale={0.1} />
      <mesh geometry={nodes.Plane449.geometry} material={materials.leaf} position={[5.53, 2.1, -8.59]} rotation={[2.37, -0.2, -2.07]} scale={0.15} />
      <mesh geometry={nodes.Plane450.geometry} material={materials.leaf} position={[5.61, 2.23, -8.82]} rotation={[-1.87, 1.25, 0.74]} scale={0.11} />
      <mesh geometry={nodes.Plane451.geometry} material={materials.leaf} position={[5.44, 2.83, -8.33]} rotation={[2.13, -1.11, -2.56]} scale={0.15} />
      <mesh geometry={nodes.Plane452.geometry} material={materials.leaf} position={[5.31, 2.54, -8.7]} rotation={[-1.95, -0.84, 2.88]} scale={0.09} />
      <mesh geometry={nodes.Plane453.geometry} material={materials.leaf} position={[5.68, 2.28, -8.84]} rotation={[-0.28, -0.65, 0.05]} scale={0.17} />
      <mesh geometry={nodes.Plane454.geometry} material={materials.leaf} position={[5.46, 2.11, -8.57]} rotation={[2.31, 0.82, -2.82]} scale={0.15} />
      <mesh geometry={nodes.Plane455.geometry} material={materials.leaf} position={[5.17, 2.36, -8.2]} rotation={[-2.1, 0.28, 2.22]} scale={0.15} />
      <mesh geometry={nodes.Plane456.geometry} material={materials.leaf} position={[5.79, 2.53, -8.8]} rotation={[1.25, -0.14, -1.5]} scale={0.14} />
      <mesh geometry={nodes.Plane457.geometry} material={materials.leaf} position={[5.17, 2.59, -8.57]} rotation={[-1.25, 0.07, 3.08]} scale={0.13} />
      <mesh geometry={nodes.Plane458.geometry} material={materials.leaf} position={[5.66, 2.74, -8.61]} rotation={[2.44, 0.81, -0.31]} scale={0.17} />
      <mesh geometry={nodes.Plane459.geometry} material={materials.leaf} position={[5.23, 2.27, -8.25]} rotation={[-2.28, 0.37, -1.95]} scale={0.19} />
      <mesh geometry={nodes.Plane460.geometry} material={materials.leaf} position={[5.68, 2.32, -8.17]} rotation={[-1.24, -1.33, -1.2]} scale={0.16} />
      <mesh geometry={nodes.Plane461.geometry} material={materials.leaf} position={[5.14, 2.63, -8.18]} rotation={[-1.98, 1.15, -2.3]} scale={0.1} />
      <mesh geometry={nodes.Plane462.geometry} material={materials.leaf} position={[5.74, 2.11, -8.65]} rotation={[-1.46, -0.35, -1.16]} scale={0.09} />
      <mesh geometry={nodes.Plane463.geometry} material={materials.leaf} position={[5.9, 2.57, -8.52]} rotation={[-1.71, -0.01, -0.87]} scale={0.12} />
      <mesh geometry={nodes.Plane464.geometry} material={materials.leaf} position={[5.51, 2.56, -8.08]} rotation={[-2.12, -0.82, -1.06]} scale={0.16} />
      <mesh geometry={nodes.Plane465.geometry} material={materials.leaf} position={[5.67, 2.71, -8.28]} rotation={[0.48, -0.76, 1.17]} scale={0.12} />
      <mesh geometry={nodes.Plane466.geometry} material={materials.leaf} position={[5.14, 2.47, -8.13]} rotation={[2.86, 0.77, 2.86]} scale={0.17} />
      <mesh geometry={nodes.Plane467.geometry} material={materials.leaf} position={[5.51, 2.46, -8.08]} rotation={[0.93, 0.15, 2.44]} scale={0.1} />
      <mesh geometry={nodes.Plane468.geometry} material={materials.leaf} position={[5.37, 2.15, -8.34]} rotation={[-2.92, -0.52, 0.79]} scale={0.1} />
      <mesh geometry={nodes.Plane469.geometry} material={materials.leaf} position={[5.48, 2.42, -8.83]} rotation={[0.74, 0.95, -1.1]} scale={0.14} />
      <mesh geometry={nodes.Plane470.geometry} material={materials.leaf} position={[5.93, 2.49, -8.67]} rotation={[0.43, -0.17, -1.7]} scale={0.16} />
      <mesh geometry={nodes.Plane471.geometry} material={materials.leaf} position={[5.48, 2.81, -8.31]} rotation={[-1.16, -0.8, 1.74]} scale={0.15} />
      <mesh geometry={nodes.Plane472.geometry} material={materials.leaf} position={[5.89, 2.23, -8.76]} rotation={[-1.81, 0.3, 1.04]} scale={0.15} />
      <mesh geometry={nodes.Plane473.geometry} material={materials.leaf} position={[5.51, 2.17, -8.73]} rotation={[0.11, 0.62, -2.77]} scale={0.17} />
      <mesh geometry={nodes.Plane474.geometry} material={materials.leaf} position={[5.7, 2.1, -8.46]} rotation={[0.4, -0.48, -0.39]} scale={0.19} />
      <mesh geometry={nodes.Plane475.geometry} material={materials.leaf} position={[5.12, 2.45, -8.18]} rotation={[3.02, -0.72, -2.35]} scale={0.09} />
      <mesh geometry={nodes.Plane476.geometry} material={materials.leaf} position={[5.61, 2.58, -8.13]} rotation={[-1.14, 0.4, -1.15]} scale={0.16} />
      <mesh geometry={nodes.Plane477.geometry} material={materials.leaf} position={[5.7, 2.55, -8.82]} rotation={[-0.17, 1.01, 0.47]} scale={0.11} />
      <mesh geometry={nodes.Plane478.geometry} material={materials.leaf} position={[5.73, 2.3, -8.22]} rotation={[-1.08, 0.74, -0.26]} scale={0.17} />
      <mesh geometry={nodes.Plane479.geometry} material={materials.leaf} position={[5.26, 2.43, -8.65]} rotation={[0.65, -0.58, -2.54]} scale={0.11} />
      <mesh geometry={nodes.Plane480.geometry} material={materials.leaf} position={[5.95, 2.4, -8.64]} rotation={[-0.44, -0.16, -1.62]} scale={0.17} />
      <mesh geometry={nodes.Plane481.geometry} material={materials.leaf} position={[5.39, 2.29, -8.13]} rotation={[1.18, -0.03, 1.07]} scale={0.12} />
      <mesh geometry={nodes.Plane482.geometry} material={materials.leaf} position={[5.18, 2.7, -8.43]} rotation={[-2.57, -0.57, -1.11]} scale={0.15} />
      <mesh geometry={nodes.Plane483.geometry} material={materials.leaf} position={[5.22, 2.65, -8.55]} rotation={[-1.59, -0.84, -0.41]} scale={0.13} />
      <mesh geometry={nodes.Plane484.geometry} material={materials.leaf} position={[5.3, 2.58, -8.04]} rotation={[0.94, 0.07, 1.87]} scale={0.09} />
      <mesh geometry={nodes.Plane485.geometry} material={materials.leaf} position={[3.12, 2.18, -10.49]} rotation={[-1.54, -0.14, -1.77]} scale={0.18} />
      <mesh geometry={nodes.Plane486.geometry} material={materials.leaf} position={[2.41, 2.05, -10.61]} rotation={[1.59, -0.35, -2.31]} scale={0.18} />
      <mesh geometry={nodes.Plane487.geometry} material={materials.leaf} position={[2.9, 2.29, -10.99]} rotation={[-2.87, -0.56, -2.2]} scale={0.1} />
      <mesh geometry={nodes.Plane488.geometry} material={materials.leaf} position={[3.03, 2.24, -10.95]} rotation={[1.79, -0.62, -1.87]} scale={0.17} />
      <mesh geometry={nodes.Plane489.geometry} material={materials.leaf} position={[2.55, 1.93, -10.66]} rotation={[-2.52, -0.05, -1.9]} scale={0.11} />
      <mesh geometry={nodes.Plane490.geometry} material={materials.leaf} position={[2.61, 1.9, -10.69]} rotation={[2.48, 0.56, -1.91]} scale={0.08} />
      <mesh geometry={nodes.Plane491.geometry} material={materials.leaf} position={[2.56, 2.15, -10.44]} rotation={[-1.52, 0.51, -3.07]} scale={0.09} />
      <mesh geometry={nodes.Plane492.geometry} material={materials.leaf} position={[2.55, 1.93, -10.66]} rotation={[-2.38, 1.09, 1.99]} scale={0.19} />
      <mesh geometry={nodes.Plane493.geometry} material={materials.leaf} position={[2.41, 1.99, -10.73]} rotation={[-2.79, -0.12, -3.1]} scale={0.11} />
      <mesh geometry={nodes.Plane494.geometry} material={materials.leaf} position={[2.76, 2.53, -10.6]} rotation={[-1.24, -1.15, -0.55]} scale={0.16} />
      <mesh geometry={nodes.Plane495.geometry} material={materials.leaf} position={[2.58, 2.28, -10.92]} rotation={[1.07, 1.09, -0.72]} scale={0.19} />
      <mesh geometry={nodes.Plane496.geometry} material={materials.leaf} position={[2.9, 2.29, -10.99]} rotation={[0.13, 0.37, 2.39]} scale={0.1} />
      <mesh geometry={nodes.Plane497.geometry} material={materials.leaf} position={[2.65, 2.46, -10.83]} rotation={[2.21, -0.22, -2.62]} scale={0.17} />
      <mesh geometry={nodes.Plane498.geometry} material={materials.leaf} position={[2.76, 1.89, -10.67]} rotation={[-3.11, -0.02, 1.11]} scale={0.12} />
      <mesh geometry={nodes.Plane499.geometry} material={materials.leaf} position={[2.92, 2.35, -10.4]} rotation={[0.38, -0.4, 1.58]} scale={0.11} />
      <mesh geometry={nodes.Plane500.geometry} material={materials.leaf} position={[2.4, 2.21, -10.59]} rotation={[-2.71, 0.38, 2.12]} scale={0.11} />
      <mesh geometry={nodes.Plane501.geometry} material={materials.leaf} position={[2.59, 1.92, -10.74]} rotation={[2.47, 0.59, -2.1]} scale={0.09} />
      <mesh geometry={nodes.Plane502.geometry} material={materials.leaf} position={[2.86, 1.97, -10.86]} rotation={[2.91, 0.09, 2.97]} scale={0.14} />
      <mesh geometry={nodes.Plane503.geometry} material={materials.leaf} position={[3.21, 2.15, -10.68]} rotation={[1.12, -0.79, -1.42]} scale={0.1} />
      <mesh geometry={nodes.Plane504.geometry} material={materials.leaf} position={[2.49, 2.08, -10.49]} rotation={[2.26, -0.65, 1.69]} scale={0.14} />
      <mesh geometry={nodes.Plane505.geometry} material={materials.leaf} position={[2.81, 1.97, -10.87]} rotation={[1.05, 0.28, -0.82]} scale={0.09} />
      <mesh geometry={nodes.Plane506.geometry} material={materials.leaf} position={[2.45, 2.03, -10.55]} rotation={[2.7, -0.1, 2.01]} scale={0.1} />
      <mesh geometry={nodes.Plane507.geometry} material={materials.leaf} position={[2.55, 1.93, -10.66]} rotation={[1.58, -0.28, 2.57]} scale={0.1} />
      <mesh geometry={nodes.Plane508.geometry} material={materials.leaf} position={[2.48, 2.02, -10.51]} rotation={[1.09, -1.35, -0.69]} scale={0.14} />
      <mesh geometry={nodes.Plane509.geometry} material={materials.leaf} position={[2.39, 2.08, -10.71]} rotation={[0.71, -1.35, 0.67]} scale={0.13} />
      <mesh geometry={nodes.Plane510.geometry} material={materials.leaf} position={[2.98, 1.96, -10.74]} rotation={[-1.23, -0.09, 0.84]} scale={0.15} />
      <mesh geometry={nodes.Plane511.geometry} material={materials.leaf} position={[2.96, 2.37, -10.41]} rotation={[1.61, 0.01, 1.35]} scale={0.15} />
      <mesh geometry={nodes.Plane512.geometry} material={materials.leaf} position={[2.93, 2.35, -10.96]} rotation={[-1.33, 1.17, 2.07]} scale={0.19} />
      <mesh geometry={nodes.Plane513.geometry} material={materials.leaf} position={[2.6, 2.46, -10.73]} rotation={[-2.8, 0.98, -2.53]} scale={0.13} />
      <mesh geometry={nodes.Plane514.geometry} material={materials.leaf} position={[2.94, 2.57, -10.73]} rotation={[-2.85, -0.44, -1.86]} scale={0.18} />
      <mesh geometry={nodes.Plane515.geometry} material={materials.leaf} position={[2.65, 1.95, -10.83]} rotation={[-0.42, -0.81, -1.28]} scale={0.19} />
      <mesh geometry={nodes.Plane516.geometry} material={materials.leaf} position={[2.96, 2.43, -10.92]} rotation={[0.04, 0, 3.07]} scale={0.12} />
      <mesh geometry={nodes.Plane517.geometry} material={materials.leaf} position={[3.23, 2.44, -10.69]} rotation={[0.78, -0.55, 1.99]} scale={0.12} />
      <mesh geometry={nodes.Plane518.geometry} material={materials.leaf} position={[2.95, 2.19, -10.97]} rotation={[-2.4, 0.28, 1.17]} scale={0.14} />
      <mesh geometry={nodes.Plane519.geometry} material={materials.leaf} position={[2.87, 2.38, -10.42]} rotation={[-2.82, 1.3, -1.72]} scale={0.14} />
      <mesh geometry={nodes.Plane520.geometry} material={materials.leaf} position={[2.79, 2.09, -10.96]} rotation={[0.25, 0.61, -0.62]} scale={0.09} />
      <mesh geometry={nodes.Plane521.geometry} material={materials.leaf} position={[2.84, 2.31, -10.39]} rotation={[3.09, 0.17, -2.01]} scale={0.13} />
      <mesh geometry={nodes.Plane522.geometry} material={materials.leaf} position={[2.58, 2.28, -10.92]} rotation={[2.66, -0.31, 2.23]} scale={0.14} />
      <mesh geometry={nodes.Plane523.geometry} material={materials.leaf} position={[2.49, 2.34, -10.81]} rotation={[-2.78, 0.9, 3.1]} scale={0.18} />
      <mesh geometry={nodes.Plane524.geometry} material={materials.leaf} position={[2.85, 1.91, -10.68]} rotation={[2.45, 0.17, 1.76]} scale={0.1} />
      <mesh geometry={nodes.Plane525.geometry} material={materials.leaf} position={[2.55, 1.93, -10.66]} rotation={[-1.9, -0.21, 1.78]} scale={0.09} />
      <mesh geometry={nodes.Plane526.geometry} material={materials.leaf} position={[2.48, 2.02, -10.51]} rotation={[2.39, -0.98, 1.76]} scale={0.13} />
      <mesh geometry={nodes.Plane527.geometry} material={materials.leaf} position={[3.03, 2.33, -10.95]} rotation={[1.48, 0.56, -0.27]} scale={0.2} />
      <mesh geometry={nodes.Plane528.geometry} material={materials.leaf} position={[3.14, 2.07, -10.68]} rotation={[-0.55, -0.35, -1.07]} scale={0.16} />
      <mesh geometry={nodes.Plane529.geometry} material={materials.leaf} position={[3.02, 2.48, -10.89]} rotation={[-0.93, -0.08, 2.73]} scale={0.15} />
      <mesh geometry={nodes.Plane530.geometry} material={materials.leaf} position={[2.49, 2.38, -10.7]} rotation={[1, 0.13, -2.76]} scale={0.15} />
      <mesh geometry={nodes.Plane531.geometry} material={materials.leaf} position={[2.81, 2.08, -10.41]} rotation={[-1.85, -0.64, -2.97]} scale={0.15} />
      <mesh geometry={nodes.Plane532.geometry} material={materials.leaf} position={[2.39, 2.05, -10.69]} rotation={[2.91, -0.12, 2.61]} scale={0.16} />
      <mesh geometry={nodes.Plane533.geometry} material={materials.leaf} position={[3.21, 2.25, -10.83]} rotation={[0.03, 0.39, -1.42]} scale={0.1} />
      <mesh geometry={nodes.Plane534.geometry} material={materials.leaf} position={[3, 2.18, -10.42]} rotation={[-2.45, 1.2, 0.69]} scale={0.18} />
      <mesh geometry={nodes.Plane535.geometry} material={materials.leaf} position={[2.92, 2.35, -10.4]} rotation={[1.26, -0.11, 2.44]} scale={0.19} />
      <mesh geometry={nodes.Plane536.geometry} material={materials.leaf} position={[2.47, 2.25, -10.84]} rotation={[3, 0.38, 2.21]} scale={0.13} />
      <mesh geometry={nodes.Plane537.geometry} material={materials.leaf} position={[2.66, 1.91, -10.63]} rotation={[1.29, -0.22, 2.02]} scale={0.15} />
      <mesh geometry={nodes.Plane538.geometry} material={materials.leaf} position={[2.45, 2.28, -10.52]} rotation={[-2.37, -0.77, 2.16]} scale={0.09} />
      <mesh geometry={nodes.Plane539.geometry} material={materials.leaf} position={[2.49, 1.96, -10.59]} rotation={[1.35, -0.4, 1.09]} scale={0.12} />
      <mesh geometry={nodes.Plane540.geometry} material={materials.leaf} position={[2.98, 1.96, -10.74]} rotation={[-0.21, 1.28, 0.16]} scale={0.18} />
      <mesh geometry={nodes.Plane541.geometry} material={materials.leaf} position={[2.58, 2.24, -10.94]} rotation={[3.07, -0.53, 2.99]} scale={0.14} />
      <mesh geometry={nodes.Plane542.geometry} material={materials.leaf} position={[2.48, 1.97, -10.73]} rotation={[-0.31, -1, -2.51]} scale={0.11} />
      <mesh geometry={nodes.Plane543.geometry} material={materials.leaf} position={[2.84, 1.97, -10.51]} rotation={[1.37, 0.16, 1.49]} scale={0.13} />
      <mesh geometry={nodes.Plane544.geometry} material={materials.leaf} position={[3.01, 2.35, -10.42]} rotation={[2.37, -1.3, 1.28]} scale={0.15} />
      <mesh geometry={nodes.Plane545.geometry} material={materials.leaf} position={[3.03, 2.24, -10.95]} rotation={[-0.34, 0.49, 1.91]} scale={0.17} />
      <mesh geometry={nodes.Plane546.geometry} material={materials.leaf} position={[2.57, 2.38, -10.84]} rotation={[2.26, 1.06, -2.89]} scale={0.08} />
      <mesh geometry={nodes.Plane547.geometry} material={materials.leaf} position={[2.4, 2.13, -10.8]} rotation={[-2.42, 0.49, 2.55]} scale={0.17} />
      <mesh geometry={nodes.Plane548.geometry} material={materials.leaf} position={[2.56, 2.15, -10.44]} rotation={[2.36, -0.01, 2.1]} scale={0.14} />
      <mesh geometry={nodes.Plane549.geometry} material={materials.leaf} position={[2.82, 2.3, -10.97]} rotation={[2.86, -0.46, 2.9]} scale={0.11} />
      <mesh geometry={nodes.Plane550.geometry} material={materials.leaf} position={[2.91, 1.94, -10.59]} rotation={[-2.08, -1.31, -1.11]} scale={0.18} />
      <mesh geometry={nodes.Plane551.geometry} material={materials.leaf} position={[3.23, 2.2, -10.64]} rotation={[2.78, 0.38, 0.6]} scale={0.11} />
      <mesh geometry={nodes.Plane552.geometry} material={materials.leaf} position={[2.72, 2.09, -10.94]} rotation={[-1.78, 0.54, 2.82]} scale={0.16} />
      <mesh geometry={nodes.Plane553.geometry} material={materials.leaf} position={[2.96, 2.13, -10.41]} rotation={[1.67, -0.72, -0.3]} scale={0.19} />
      <mesh geometry={nodes.Plane554.geometry} material={materials.leaf} position={[2.84, 2.31, -10.39]} rotation={[-1.3, 0.4, -1.44]} scale={0.1} />
      <mesh geometry={nodes.Plane555.geometry} material={materials.leaf} position={[2.5, 2.32, -10.52]} rotation={[1.63, 0.56, -1.95]} scale={0.11} />
      <mesh geometry={nodes.Plane556.geometry} material={materials.leaf} position={[2.84, 1.93, -10.55]} rotation={[0.31, 0.22, -2.32]} scale={0.13} />
      <mesh geometry={nodes.Plane557.geometry} material={materials.leaf} position={[2.89, 2.05, -10.93]} rotation={[-1.93, 1.11, 0.88]} scale={0.18} />
      <mesh geometry={nodes.Plane558.geometry} material={materials.leaf} position={[3.25, 2.32, -10.67]} rotation={[1.16, 1.07, -0.55]} scale={0.13} />
      <mesh geometry={nodes.Plane559.geometry} material={materials.leaf} position={[2.61, 1.9, -10.69]} rotation={[0.13, -1.09, -0.28]} scale={0.1} />
      <mesh geometry={nodes.Plane560.geometry} material={materials.leaf} position={[2.39, 2.08, -10.71]} rotation={[-0.98, 0.04, -2.42]} scale={0.16} />
      <mesh geometry={nodes.Plane561.geometry} material={materials.leaf} position={[2.81, 2.46, -10.89]} rotation={[-0.94, -1.32, 0.25]} scale={0.2} />
      <mesh geometry={nodes.Plane562.geometry} material={materials.leaf} position={[3.13, 2.48, -10.56]} rotation={[-0.63, -0.24, 0.68]} scale={0.1} />
      <mesh geometry={nodes.Plane563.geometry} material={materials.leaf} position={[2.59, 2.3, -10.43]} rotation={[2.1, 0.6, 0.99]} scale={0.14} />
      <mesh geometry={nodes.Plane564.geometry} material={materials.leaf} position={[2.82, 2.15, -10.98]} rotation={[-0.39, 0.71, 0.86]} scale={0.14} />
      <mesh geometry={nodes.Plane565.geometry} material={materials.leaf} position={[2.88, 2.08, -10.96]} rotation={[-2.38, -0.01, 0.61]} scale={0.13} />
      <mesh geometry={nodes.Plane566.geometry} material={materials.leaf} position={[2.93, 2.35, -10.96]} rotation={[1.81, 0.9, -0.34]} scale={0.16} />
      <mesh geometry={nodes.Plane567.geometry} material={materials.leaf} position={[3.18, 2.15, -10.59]} rotation={[-1.01, -0.06, 1.66]} scale={0.09} />
      <mesh geometry={nodes.Plane568.geometry} material={materials.leaf} position={[2.49, 2.34, -10.81]} rotation={[0.74, -0.54, -1.7]} scale={0.1} />
      <mesh geometry={nodes.Plane569.geometry} material={materials.leaf} position={[2.74, 1.92, -10.59]} rotation={[2.62, -1.06, 1.47]} scale={0.15} />
      <mesh geometry={nodes.Plane570.geometry} material={materials.leaf} position={[2.56, 2.03, -10.47]} rotation={[2.22, -0.54, 2.96]} scale={0.11} />
      <mesh geometry={nodes.Plane571.geometry} material={materials.leaf} position={[2.94, 2.57, -10.73]} rotation={[-2.09, -0.39, 1.12]} scale={0.15} />
      <mesh geometry={nodes.Plane572.geometry} material={materials.leaf} position={[2.84, 2.31, -10.39]} rotation={[0.43, -0.53, 0.87]} scale={0.09} />
      <mesh geometry={nodes.Plane573.geometry} material={materials.leaf} position={[2.49, 2.08, -10.49]} rotation={[-1.8, 0.06, 1.9]} scale={0.17} />
      <mesh geometry={nodes.Plane574.geometry} material={materials.leaf} position={[2.8, 1.92, -10.57]} rotation={[2.55, -0.29, 0.45]} scale={0.15} />
      <mesh geometry={nodes.Plane575.geometry} material={materials.leaf} position={[3.21, 2.15, -10.68]} rotation={[-1.97, 0.98, -1.47]} scale={0.15} />
      <mesh geometry={nodes.Plane576.geometry} material={materials.leaf} position={[2.44, 2.3, -10.58]} rotation={[1.28, -0.91, 2.44]} scale={0.14} />
      <mesh geometry={nodes.Plane577.geometry} material={materials.leaf} position={[3.01, 2.35, -10.42]} rotation={[0.23, -0.59, -0.28]} scale={0.13} />
      <mesh geometry={nodes.Plane578.geometry} material={materials.leaf} position={[2.64, 2.49, -10.65]} rotation={[-2.29, 0.05, -2.69]} scale={0.17} />
      <mesh geometry={nodes.Plane579.geometry} material={materials.leaf} position={[3.14, 2.07, -10.68]} rotation={[-1.65, 1.01, 0.21]} scale={0.19} />
      <mesh geometry={nodes.Plane580.geometry} material={materials.leaf} position={[2.85, 2.11, -10.98]} rotation={[0.9, 0.24, -1.23]} scale={0.16} />
      <mesh geometry={nodes.Plane581.geometry} material={materials.leaf} position={[3.24, 2.39, -10.68]} rotation={[-0.75, 0.94, -0.75]} scale={0.1} />
      <mesh geometry={nodes.Plane582.geometry} material={materials.leaf} position={[2.55, 1.93, -10.66]} rotation={[0.4, 0.8, -1.72]} scale={0.09} />
      <mesh geometry={nodes.Plane583.geometry} material={materials.leaf} position={[2.51, 2.34, -10.84]} rotation={[1.47, 0.95, -1.97]} scale={0.12} />
      <mesh geometry={nodes.Plane584.geometry} material={materials.leaf} position={[3.03, 2.33, -10.95]} rotation={[0.39, 0.62, -1.35]} scale={0.16} />
      <mesh geometry={nodes.Plane585.geometry} material={materials.leaf} position={[2.81, 2.46, -10.89]} rotation={[1.24, 0.11, -1.18]} scale={0.12} />
      <mesh geometry={nodes.Plane586.geometry} material={materials.leaf} position={[3.27, 2.25, -10.72]} rotation={[0.95, -1.14, 1.34]} scale={0.17} />
      <mesh geometry={nodes.Plane587.geometry} material={materials.leaf} position={[3.03, 2.24, -10.95]} rotation={[-1.13, 0.11, 0.72]} scale={0.1} />
      <mesh geometry={nodes.Plane588.geometry} material={materials.leaf} position={[2.99, 1.96, -10.69]} rotation={[-1.38, -0.85, -1.59]} scale={0.1} />
      <mesh geometry={nodes.Plane589.geometry} material={materials.leaf} position={[2.65, 2.2, -10.39]} rotation={[2.98, -0.58, -2.65]} scale={0.14} />
      <mesh geometry={nodes.Plane590.geometry} material={materials.leaf} position={[2.41, 2.27, -10.74]} rotation={[2.75, -0.45, -1.54]} scale={0.16} />
      <mesh geometry={nodes.Plane591.geometry} material={materials.leaf} position={[2.93, 2.55, -10.77]} rotation={[-2.94, -0.29, -1.61]} scale={0.15} />
      <mesh geometry={nodes.Plane592.geometry} material={materials.leaf} position={[2.39, 2.03, -10.66]} rotation={[-1.6, 0.3, -2.83]} scale={0.15} />
      <mesh geometry={nodes.Plane593.geometry} material={materials.leaf} position={[2.68, 1.98, -10.48]} rotation={[0.66, -1.18, -0.67]} scale={0.17} />
      <mesh geometry={nodes.Plane594.geometry} material={materials.leaf} position={[2.69, 1.91, -10.77]} rotation={[2.22, -0.2, 2.71]} scale={0.19} />
      <mesh geometry={nodes.Plane595.geometry} material={materials.leaf} position={[3.25, 2.23, -10.67]} rotation={[-0.92, 0.34, -0.09]} scale={0.09} />
      <mesh geometry={nodes.Plane596.geometry} material={materials.leaf} position={[2.93, 2.35, -10.96]} rotation={[-0.38, 1.06, 0.84]} scale={0.16} />
      <mesh geometry={nodes.Plane597.geometry} material={materials.leaf} position={[2.5, 2.32, -10.52]} rotation={[-1.44, 0.92, -2.43]} scale={0.11} />
      <mesh geometry={nodes.Plane598.geometry} material={materials.leaf} position={[2.79, 2.09, -10.96]} rotation={[-2.85, 0.66, -3.05]} scale={0.17} />
      <mesh geometry={nodes.Plane599.geometry} material={materials.leaf} position={[2.9, 2.22, -10.4]} rotation={[-0.25, -1.09, 0.55]} scale={0.11} />
      <mesh geometry={nodes.Plane600.geometry} material={materials.leaf} position={[2.41, 2.19, -10.78]} rotation={[-0.58, -1.29, -0.89]} scale={0.17} />
      <mesh geometry={nodes.Plane601.geometry} material={materials.leaf} position={[3.09, 2.09, -10.85]} rotation={[-0.49, -0.92, -2.08]} scale={0.12} />
      <mesh geometry={nodes.Plane602.geometry} material={materials.leaf} position={[3.08, 2.45, -10.52]} rotation={[0.33, 0.32, 2.85]} scale={0.15} />
      <mesh geometry={nodes.Plane603.geometry} material={materials.leaf} position={[2.99, 2.41, -10.45]} rotation={[2.03, -0.24, 2.56]} scale={0.13} />
      <mesh geometry={nodes.Plane604.geometry} material={materials.leaf} position={[3.2, 2.34, -10.86]} rotation={[0.07, 1.02, 0.11]} scale={0.09} />
      <mesh geometry={nodes.Plane605.geometry} material={materials.leaf} position={[4.62, 2.41, -11.41]} rotation={[-2.57, 0.83, 2.95]} scale={0.09} />
      <mesh geometry={nodes.Plane606.geometry} material={materials.leaf} position={[4.79, 2.65, -10.82]} rotation={[-2.09, 0.49, -2.21]} scale={0.15} />
      <mesh geometry={nodes.Plane607.geometry} material={materials.leaf} position={[4.75, 2.69, -11.3]} rotation={[-0.86, 0.17, 0.15]} scale={0.15} />
      <mesh geometry={nodes.Plane608.geometry} material={materials.leaf} position={[4.38, 2.31, -10.74]} rotation={[-2.2, -1.11, -1.88]} scale={0.13} />
      <mesh geometry={nodes.Plane609.geometry} material={materials.leaf} position={[4.58, 2.38, -10.69]} rotation={[-0.37, 0.46, -0.83]} scale={0.18} />
      <mesh geometry={nodes.Plane610.geometry} material={materials.leaf} position={[4.19, 2.5, -10.77]} rotation={[-1.95, 1.1, -1.07]} scale={0.18} />
      <mesh geometry={nodes.Plane611.geometry} material={materials.leaf} position={[4.37, 2.7, -10.79]} rotation={[1.18, 0, 2.91]} scale={0.17} />
      <mesh geometry={nodes.Plane612.geometry} material={materials.leaf} position={[4.69, 2.18, -11.01]} rotation={[0.21, 0.82, -2.63]} scale={0.19} />
      <mesh geometry={nodes.Plane613.geometry} material={materials.leaf} position={[4.93, 2.63, -11.08]} rotation={[0.46, 0.01, -0.62]} scale={0.15} />
      <mesh geometry={nodes.Plane614.geometry} material={materials.leaf} position={[4.72, 2.22, -11.2]} rotation={[-2.83, 1.1, 0.01]} scale={0.19} />
      <mesh geometry={nodes.Plane615.geometry} material={materials.leaf} position={[4.07, 2.29, -10.99]} rotation={[-3.03, 0.42, 3.02]} scale={0.14} />
      <mesh geometry={nodes.Plane616.geometry} material={materials.leaf} position={[4.45, 2.14, -10.95]} rotation={[-1.39, -0.58, -2.1]} scale={0.11} />
      <mesh geometry={nodes.Plane617.geometry} material={materials.leaf} position={[4.94, 2.35, -11]} rotation={[-1.51, -0.86, 3.06]} scale={0.18} />
      <mesh geometry={nodes.Plane618.geometry} material={materials.leaf} position={[4.31, 2.25, -10.82]} rotation={[-2.43, -0.48, 2.53]} scale={0.13} />
      <mesh geometry={nodes.Plane619.geometry} material={materials.leaf} position={[4.52, 2.16, -10.9]} rotation={[2.96, 0.87, 0.6]} scale={0.19} />
      <mesh geometry={nodes.Plane620.geometry} material={materials.leaf} position={[4.03, 2.29, -11.12]} rotation={[-2.83, 0.73, 2.76]} scale={0.19} />
      <mesh geometry={nodes.Plane621.geometry} material={materials.leaf} position={[4.86, 2.53, -11.27]} rotation={[-2.83, 1.3, -2.49]} scale={0.11} />
      <mesh geometry={nodes.Plane622.geometry} material={materials.leaf} position={[3.93, 2.66, -11.28]} rotation={[2.68, 0.74, -1.56]} scale={0.16} />
      <mesh geometry={nodes.Plane623.geometry} material={materials.leaf} position={[4.47, 2.14, -11.02]} rotation={[-2.52, -0.35, 3.09]} scale={0.11} />
      <mesh geometry={nodes.Plane624.geometry} material={materials.leaf} position={[4.69, 2.18, -11.01]} rotation={[-0.58, -0.27, -0.99]} scale={0.17} />
      <mesh geometry={nodes.Plane625.geometry} material={materials.leaf} position={[4.16, 2.24, -10.91]} rotation={[1.98, -0.74, 2.61]} scale={0.18} />
      <mesh geometry={nodes.Plane626.geometry} material={materials.leaf} position={[4.67, 2.6, -11.4]} rotation={[-0.71, 0.9, 0.12]} scale={0.13} />
      <mesh geometry={nodes.Plane627.geometry} material={materials.leaf} position={[4.84, 2.65, -11.2]} rotation={[0.17, -0.22, -0.27]} scale={0.19} />
      <mesh geometry={nodes.Plane628.geometry} material={materials.leaf} position={[4.08, 2.38, -11.38]} rotation={[2.68, 1.34, -1.87]} scale={0.18} />
      <mesh geometry={nodes.Plane629.geometry} material={materials.leaf} position={[4.14, 2.82, -11.13]} rotation={[-2.64, -0.01, 2.06]} scale={0.19} />
      <mesh geometry={nodes.Plane630.geometry} material={materials.leaf} position={[4.64, 2.8, -10.99]} rotation={[-2.84, -1.33, -2.08]} scale={0.13} />
      <mesh geometry={nodes.Plane631.geometry} material={materials.leaf} position={[4.2, 2.48, -11.47]} rotation={[2.76, 1.12, -3.07]} scale={0.19} />
      <mesh geometry={nodes.Plane632.geometry} material={materials.leaf} position={[4.47, 2.77, -11.37]} rotation={[2.39, 0.31, -0.72]} scale={0.15} />
      <mesh geometry={nodes.Plane633.geometry} material={materials.leaf} position={[4.64, 2.8, -10.99]} rotation={[-2.31, -0.61, 0.14]} scale={0.19} />
      <mesh geometry={nodes.Plane634.geometry} material={materials.leaf} position={[4.87, 2.6, -10.83]} rotation={[0.32, -0.62, 0.89]} scale={0.17} />
      <mesh geometry={nodes.Plane635.geometry} material={materials.leaf} position={[4.78, 2.23, -10.88]} rotation={[0.95, -0.99, -0.71]} scale={0.14} />
      <mesh geometry={nodes.Plane636.geometry} material={materials.leaf} position={[4.69, 2.18, -11.01]} rotation={[1.45, -0.86, 1.67]} scale={0.09} />
      <mesh geometry={nodes.Plane637.geometry} material={materials.leaf} position={[4.58, 2.16, -11.15]} rotation={[-0.96, -0.16, -2.38]} scale={0.14} />
      <mesh geometry={nodes.Plane638.geometry} material={materials.leaf} position={[4.14, 2.82, -11.13]} rotation={[1.96, 0.76, -1.25]} scale={0.08} />
      <mesh geometry={nodes.Plane639.geometry} material={materials.leaf} position={[4.61, 2.72, -10.82]} rotation={[-3.01, 0.7, -1.1]} scale={0.18} />
      <mesh geometry={nodes.Plane640.geometry} material={materials.leaf} position={[4.93, 2.43, -11.2]} rotation={[1.09, 0.71, -1.44]} scale={0.14} />
      <mesh geometry={nodes.Plane641.geometry} material={materials.leaf} position={[4.44, 2.23, -10.78]} rotation={[2.89, -0.82, 3.13]} scale={0.17} />
      <mesh geometry={nodes.Plane642.geometry} material={materials.leaf} position={[4.96, 2.42, -11.09]} rotation={[-1.26, -0.01, 0.64]} scale={0.17} />
      <mesh geometry={nodes.Plane643.geometry} material={materials.leaf} position={[4.75, 2.69, -11.3]} rotation={[0.49, -0.51, 0.77]} scale={0.13} />
      <mesh geometry={nodes.Plane644.geometry} material={materials.leaf} position={[4.82, 2.41, -11.3]} rotation={[-0.06, 1.15, 0.26]} scale={0.17} />
      <mesh geometry={nodes.Plane645.geometry} material={materials.leaf} position={[4.69, 2.18, -11.01]} rotation={[1.52, -0.22, 0.26]} scale={0.18} />
      <mesh geometry={nodes.Plane646.geometry} material={materials.leaf} position={[4.38, 2.58, -10.71]} rotation={[2.62, 0.6, 1.78]} scale={0.11} />
      <mesh geometry={nodes.Plane647.geometry} material={materials.leaf} position={[4.44, 2.23, -10.78]} rotation={[0.85, 0.73, 2.17]} scale={0.11} />
      <mesh geometry={nodes.Plane648.geometry} material={materials.leaf} position={[4.67, 2.21, -10.86]} rotation={[0.09, -0.79, -1.21]} scale={0.14} />
      <mesh geometry={nodes.Plane649.geometry} material={materials.leaf} position={[4.7, 2.8, -11.05]} rotation={[-1.58, 0.91, -1.24]} scale={0.18} />
      <mesh geometry={nodes.Plane650.geometry} material={materials.leaf} position={[4.67, 2.6, -11.4]} rotation={[-1.14, 1.06, 1.29]} scale={0.1} />
      <mesh geometry={nodes.Plane651.geometry} material={materials.leaf} position={[4.85, 2.26, -10.97]} rotation={[2.45, 0.34, 0.32]} scale={0.1} />
      <mesh geometry={nodes.Plane652.geometry} material={materials.leaf} position={[4.93, 2.38, -11.17]} rotation={[-1.86, -0.28, 0.34]} scale={0.17} />
      <mesh geometry={nodes.Plane653.geometry} material={materials.leaf} position={[4.92, 2.51, -10.86]} rotation={[0.85, -0.28, 0.68]} scale={0.15} />
      <mesh geometry={nodes.Plane654.geometry} material={materials.leaf} position={[4.51, 2.61, -10.73]} rotation={[-1.14, -0.92, 0.92]} scale={0.15} />
      <mesh geometry={nodes.Plane655.geometry} material={materials.leaf} position={[4.55, 2.25, -11.32]} rotation={[-0.3, -0.21, -0.15]} scale={0.12} />
      <mesh geometry={nodes.Plane656.geometry} material={materials.leaf} position={[4.78, 2.75, -11.05]} rotation={[-0.32, -1.31, -0.17]} scale={0.16} />
      <mesh geometry={nodes.Plane657.geometry} material={materials.leaf} position={[4.85, 2.26, -10.97]} rotation={[-1.74, -0.57, 0.63]} scale={0.14} />
      <mesh geometry={nodes.Plane658.geometry} material={materials.leaf} position={[4.15, 2.34, -11.36]} rotation={[2.99, 0.96, 1.91]} scale={0.19} />
      <mesh geometry={nodes.Plane659.geometry} material={materials.leaf} position={[4.54, 2.23, -10.77]} rotation={[-1.54, -1.32, -0.62]} scale={0.13} />
      <mesh geometry={nodes.Plane660.geometry} material={materials.leaf} position={[4.25, 2.34, -11.38]} rotation={[1.16, -0.56, -1.21]} scale={0.09} />
      <mesh geometry={nodes.Plane661.geometry} material={materials.leaf} position={[3.93, 2.66, -11.28]} rotation={[-1.67, 0.68, 3.07]} scale={0.15} />
      <mesh geometry={nodes.Plane662.geometry} material={materials.leaf} position={[4.47, 2.23, -11.32]} rotation={[2.06, 0.64, -1.97]} scale={0.16} />
      <mesh geometry={nodes.Plane663.geometry} material={materials.leaf} position={[4.07, 2.5, -10.84]} rotation={[-2.52, -0.51, -1.94]} scale={0.09} />
      <mesh geometry={nodes.Plane664.geometry} material={materials.leaf} position={[4.4, 2.63, -11.47]} rotation={[2.08, -0.06, -2.81]} scale={0.1} />
      <mesh geometry={nodes.Plane665.geometry} material={materials.leaf} position={[4.34, 2.57, -11.49]} rotation={[2.57, 0.22, -3.12]} scale={0.13} />
      <mesh geometry={nodes.Plane666.geometry} material={materials.leaf} position={[4.7, 2.51, -11.39]} rotation={[0.66, 0.89, -1.01]} scale={0.1} />
      <mesh geometry={nodes.Plane667.geometry} material={materials.leaf} position={[4.16, 2.62, -10.8]} rotation={[2.9, -0.13, 2.39]} scale={0.13} />
      <mesh geometry={nodes.Plane668.geometry} material={materials.leaf} position={[3.98, 2.7, -11.27]} rotation={[-0.53, -0.33, 2.22]} scale={0.19} />
      <mesh geometry={nodes.Plane669.geometry} material={materials.leaf} position={[4.59, 2.5, -10.69]} rotation={[-1.12, -1.31, -2.31]} scale={0.12} />
      <mesh geometry={nodes.Plane670.geometry} material={materials.leaf} position={[4.19, 2.5, -10.77]} rotation={[2.63, -0.44, 2.57]} scale={0.09} />
      <mesh geometry={nodes.Plane671.geometry} material={materials.leaf} position={[4.28, 2.7, -10.81]} rotation={[-1.32, -0.73, -2.17]} scale={0.17} />
      <mesh geometry={nodes.Plane672.geometry} material={materials.leaf} position={[4.71, 2.3, -11.28]} rotation={[-1.2, -1.12, -2.65]} scale={0.13} />
      <mesh geometry={nodes.Plane673.geometry} material={materials.leaf} position={[4.93, 2.63, -11.08]} rotation={[-0.67, -0.44, -1.41]} scale={0.1} />
      <mesh geometry={nodes.Plane674.geometry} material={materials.leaf} position={[4.64, 2.59, -10.72]} rotation={[1.42, 0.34, 0.15]} scale={0.13} />
      <mesh geometry={nodes.Plane675.geometry} material={materials.leaf} position={[4.31, 2.85, -11.09]} rotation={[2.03, 0.95, -0.83]} scale={0.19} />
      <mesh geometry={nodes.Plane676.geometry} material={materials.leaf} position={[4.4, 2.28, -10.74]} rotation={[-2.86, -0.07, -1.88]} scale={0.19} />
      <mesh geometry={nodes.Plane677.geometry} material={materials.leaf} position={[4.73, 2.59, -10.73]} rotation={[0.29, -0.94, 0.88]} scale={0.13} />
      <mesh geometry={nodes.Plane678.geometry} material={materials.leaf} position={[4.58, 2.38, -10.69]} rotation={[1.57, 0.08, 1.14]} scale={0.19} />
      <mesh geometry={nodes.Plane679.geometry} material={materials.leaf} position={[4.77, 2.26, -10.8]} rotation={[-0.37, 0.63, -0.44]} scale={0.1} />
      <mesh geometry={nodes.Plane680.geometry} material={materials.leaf} position={[3.94, 2.58, -11.26]} rotation={[0.6, 0.86, -2.99]} scale={0.17} />
      <mesh geometry={nodes.Plane681.geometry} material={materials.leaf} position={[4.07, 2.76, -11.24]} rotation={[1.54, 0.45, -2.04]} scale={0.15} />
      <mesh geometry={nodes.Plane682.geometry} material={materials.leaf} position={[3.92, 2.62, -11.06]} rotation={[-1.04, 0.33, -2.94]} scale={0.15} />
      <mesh geometry={nodes.Plane683.geometry} material={materials.leaf} position={[3.94, 2.53, -11.01]} rotation={[-1.94, -0.78, 2.05]} scale={0.13} />
      <mesh geometry={nodes.Plane684.geometry} material={materials.leaf} position={[4.17, 2.22, -11.07]} rotation={[1.76, 0.95, 2.67]} scale={0.1} />
      <mesh geometry={nodes.Plane685.geometry} material={materials.leaf} position={[4.19, 2.5, -10.77]} rotation={[2.94, 0.27, -3.07]} scale={0.11} />
      <mesh geometry={nodes.Plane686.geometry} material={materials.leaf} position={[4.99, 2.51, -11.05]} rotation={[-1.51, 0.89, 0.82]} scale={0.17} />
      <mesh geometry={nodes.Plane687.geometry} material={materials.leaf} position={[4.52, 2.67, -11.42]} rotation={[0.6, -0.25, 1.41]} scale={0.18} />
      <mesh geometry={nodes.Plane688.geometry} material={materials.leaf} position={[4.45, 2.14, -10.95]} rotation={[-2.59, 0.63, 2.03]} scale={0.18} />
      <mesh geometry={nodes.Plane689.geometry} material={materials.leaf} position={[4.38, 2.31, -10.74]} rotation={[1, -0.92, 0.44]} scale={0.16} />
      <mesh geometry={nodes.Plane690.geometry} material={materials.leaf} position={[4.07, 2.76, -11.24]} rotation={[-1.47, -1.23, -0.08]} scale={0.12} />
      <mesh geometry={nodes.Plane691.geometry} material={materials.leaf} position={[4.93, 2.63, -11.08]} rotation={[-1.82, 0.95, 1.45]} scale={0.12} />
      <mesh geometry={nodes.Plane692.geometry} material={materials.leaf} position={[3.99, 2.33, -11.18]} rotation={[-2.64, 0.46, -2.89]} scale={0.2} />
      <mesh geometry={nodes.Plane693.geometry} material={materials.leaf} position={[4.64, 2.8, -10.99]} rotation={[2.33, 0.04, -1.18]} scale={0.09} />
      <mesh geometry={nodes.Plane694.geometry} material={materials.leaf} position={[4.45, 2.14, -10.95]} rotation={[2.77, 0.04, 2.88]} scale={0.15} />
      <mesh geometry={nodes.Plane695.geometry} material={materials.leaf} position={[4.21, 2.64, -11.46]} rotation={[-0.19, 0.82, 2.37]} scale={0.15} />
      <mesh geometry={nodes.Plane696.geometry} material={materials.leaf} position={[4.86, 2.53, -11.27]} rotation={[1.2, -0.3, -1.38]} scale={0.12} />
      <mesh geometry={nodes.Plane697.geometry} material={materials.leaf} position={[4.41, 2.31, -11.4]} rotation={[-3.06, 0.47, -2.55]} scale={0.09} />
      <mesh geometry={nodes.Plane698.geometry} material={materials.leaf} position={[4.94, 2.35, -11]} rotation={[-0.92, -0.21, 0.41]} scale={0.13} />
      <mesh geometry={nodes.Plane699.geometry} material={materials.leaf} position={[4.28, 2.84, -11.21]} rotation={[-2.48, 0.11, -2.79]} scale={0.1} />
      <mesh geometry={nodes.Plane700.geometry} material={materials.leaf} position={[4.2, 2.48, -11.47]} rotation={[2.2, 0.29, -2.28]} scale={0.15} />
      <mesh geometry={nodes.Plane701.geometry} material={materials.leaf} position={[4.73, 2.59, -10.73]} rotation={[2.12, -0.14, -0.25]} scale={0.18} />
      <mesh geometry={nodes.Plane702.geometry} material={materials.leaf} position={[4.82, 2.4, -10.77]} rotation={[-0.19, -0.37, -0.07]} scale={0.17} />
      <mesh geometry={nodes.Plane703.geometry} material={materials.leaf} position={[4.93, 2.43, -11.2]} rotation={[0.56, 0.99, 2.08]} scale={0.11} />
      <mesh geometry={nodes.Plane704.geometry} material={materials.leaf} position={[4.21, 2.72, -10.87]} rotation={[-1.37, -1.07, -2.02]} scale={0.08} />
      <mesh geometry={nodes.Plane705.geometry} material={materials.leaf} position={[4.39, 2.18, -10.9]} rotation={[-0.78, -0.31, -2.08]} scale={0.13} />
      <mesh geometry={nodes.Plane706.geometry} material={materials.leaf} position={[4.43, 2.86, -11.12]} rotation={[-1.97, 0.63, 2.77]} scale={0.17} />
      <mesh geometry={nodes.Plane707.geometry} material={materials.leaf} position={[4.95, 2.35, -10.93]} rotation={[-1.31, 0.62, -0.2]} scale={0.1} />
      <mesh geometry={nodes.Plane708.geometry} material={materials.leaf} position={[4.27, 2.58, -10.74]} rotation={[-2.02, 0.81, -2.9]} scale={0.13} />
      <mesh geometry={nodes.Plane709.geometry} material={materials.leaf} position={[4.87, 2.6, -10.83]} rotation={[0.05, -0.15, 0.38]} scale={0.08} />
      <mesh geometry={nodes.Plane710.geometry} material={materials.leaf} position={[3.94, 2.53, -11.01]} rotation={[0.96, 0.48, 1.46]} scale={0.18} />
      <mesh geometry={nodes.Plane711.geometry} material={materials.leaf} position={[4.55, 2.2, -11.24]} rotation={[-2.88, 0.66, 1.43]} scale={0.13} />
      <mesh geometry={nodes.Plane712.geometry} material={materials.leaf} position={[4.36, 2.83, -10.98]} rotation={[0.34, 0.09, 2.19]} scale={0.19} />
      <mesh geometry={nodes.Plane713.geometry} material={materials.leaf} position={[4.08, 2.78, -11.1]} rotation={[2.76, -0.34, 1.91]} scale={0.14} />
      <mesh geometry={nodes.Plane714.geometry} material={materials.leaf} position={[4.31, 2.25, -10.82]} rotation={[1.62, -0.68, 1.22]} scale={0.19} />
      <mesh geometry={nodes.Plane715.geometry} material={materials.leaf} position={[3.97, 2.71, -11.21]} rotation={[0.9, 0.23, -2.48]} scale={0.11} />
      <mesh geometry={nodes.Plane716.geometry} material={materials.leaf} position={[4.94, 2.35, -11]} rotation={[-0.33, -0.43, -1.66]} scale={0.13} />
      <mesh geometry={nodes.Plane717.geometry} material={materials.leaf} position={[4.09, 2.44, -11.4]} rotation={[-1.13, -0.26, -2.92]} scale={0.11} />
      <mesh geometry={nodes.Plane718.geometry} material={materials.leaf} position={[3.94, 2.42, -11.15]} rotation={[-2.35, -0.28, 2.96]} scale={0.18} />
      <mesh geometry={nodes.Plane719.geometry} material={materials.leaf} position={[4.47, 2.77, -11.37]} rotation={[0.81, -0.05, -0.38]} scale={0.09} />
      <mesh geometry={nodes.Plane720.geometry} material={materials.leaf} position={[4.51, 2.61, -10.73]} rotation={[-3.05, -0.35, -2.65]} scale={0.09} />
      <mesh geometry={nodes.Plane721.geometry} material={materials.leaf} position={[4.87, 2.33, -11.22]} rotation={[-0.86, 0.31, -0.72]} scale={0.1} />
      <mesh geometry={nodes.Plane722.geometry} material={materials.leaf} position={[4.21, 2.82, -11]} rotation={[-0.21, 0.63, 2.08]} scale={0.09} />
      <mesh geometry={nodes.Plane723.geometry} material={materials.leaf} position={[3.93, 2.51, -11.09]} rotation={[-1.74, -0.53, 2.24]} scale={0.12} />
      <mesh geometry={nodes.Plane724.geometry} material={materials.leaf} position={[3.97, 2.66, -11.02]} rotation={[-0.54, 0.54, 1.58]} scale={0.15} />
      <mesh geometry={nodes.Plane725.geometry} material={materials.leaf} position={[3.71, 2.5, -11.93]} rotation={[-1.25, 0.69, -0.2]} scale={0.19} />
      <mesh geometry={nodes.Plane726.geometry} material={materials.leaf} position={[3.47, 1.97, -11.87]} rotation={[-0.03, 0.76, -1.01]} scale={0.1} />
      <mesh geometry={nodes.Plane727.geometry} material={materials.leaf} position={[3.22, 2, -11.89]} rotation={[2.32, -0.42, 2.99]} scale={0.11} />
      <mesh geometry={nodes.Plane728.geometry} material={materials.leaf} position={[3.86, 2.42, -12.08]} rotation={[-2.26, 0.17, 0.87]} scale={0.19} />
      <mesh geometry={nodes.Plane729.geometry} material={materials.leaf} position={[3.71, 2.14, -11.85]} rotation={[1.91, -1.05, 1.94]} scale={0.16} />
      <mesh geometry={nodes.Plane730.geometry} material={materials.leaf} position={[3.74, 2.41, -11.87]} rotation={[-0.03, 0.01, 0.21]} scale={0.2} />
      <mesh geometry={nodes.Plane731.geometry} material={materials.leaf} position={[3.16, 2.12, -11.7]} rotation={[-2.53, -0.64, 2.19]} scale={0.12} />
      <mesh geometry={nodes.Plane732.geometry} material={materials.leaf} position={[3, 2.24, -11.71]} rotation={[0.14, -0.28, -2.77]} scale={0.09} />
      <mesh geometry={nodes.Plane733.geometry} material={materials.leaf} position={[3.67, 1.99, -12.19]} rotation={[3.12, 0.36, 3.06]} scale={0.13} />
      <mesh geometry={nodes.Plane734.geometry} material={materials.leaf} position={[3.16, 2.12, -11.7]} rotation={[2.93, 1.15, 1.43]} scale={0.18} />
      <mesh geometry={nodes.Plane735.geometry} material={materials.leaf} position={[3.8, 2.04, -12.1]} rotation={[2.49, -1.13, 1.44]} scale={0.15} />
      <mesh geometry={nodes.Plane736.geometry} material={materials.leaf} position={[3.92, 2.35, -12.34]} rotation={[-2.39, -1.43, -1.05]} scale={0.11} />
      <mesh geometry={nodes.Plane737.geometry} material={materials.leaf} position={[3.08, 2.12, -11.79]} rotation={[2.6, 0.07, 1.62]} scale={0.13} />
      <mesh geometry={nodes.Plane738.geometry} material={materials.leaf} position={[3.46, 2.34, -11.65]} rotation={[-0.59, -1.11, 1.39]} scale={0.13} />
      <mesh geometry={nodes.Plane739.geometry} material={materials.leaf} position={[3.75, 2.27, -12.45]} rotation={[-0.6, 0.83, 0.11]} scale={0.1} />
      <mesh geometry={nodes.Plane740.geometry} material={materials.leaf} position={[3.59, 1.97, -12.05]} rotation={[-1.99, -1.06, 1.09]} scale={0.18} />
      <mesh geometry={nodes.Plane741.geometry} material={materials.leaf} position={[3.55, 2.02, -12.29]} rotation={[-0.26, -0.44, 0.56]} scale={0.09} />
      <mesh geometry={nodes.Plane742.geometry} material={materials.leaf} position={[3.81, 2.25, -12.44]} rotation={[-2.19, 0.32, 2.11]} scale={0.18} />
      <mesh geometry={nodes.Plane743.geometry} material={materials.leaf} position={[3.9, 2.26, -12.33]} rotation={[0.6, 0.27, -1.97]} scale={0.08} />
      <mesh geometry={nodes.Plane744.geometry} material={materials.leaf} position={[3.37, 2.63, -12.13]} rotation={[0.85, -0.42, -2.59]} scale={0.19} />
      <mesh geometry={nodes.Plane745.geometry} material={materials.leaf} position={[3.47, 2.55, -11.77]} rotation={[-0.22, -0.24, 0.21]} scale={0.18} />
      <mesh geometry={nodes.Plane746.geometry} material={materials.leaf} position={[3.51, 2.17, -12.36]} rotation={[1.16, 0.78, -1.23]} scale={0.15} />
      <mesh geometry={nodes.Plane747.geometry} material={materials.leaf} position={[3.49, 1.97, -11.88]} rotation={[-1.42, -0.82, -0.83]} scale={0.17} />
      <mesh geometry={nodes.Plane748.geometry} material={materials.leaf} position={[3.74, 2.41, -11.87]} rotation={[0.4, 0.41, 0.25]} scale={0.09} />
      <mesh geometry={nodes.Plane749.geometry} material={materials.leaf} position={[3.88, 2.29, -12.04]} rotation={[0.97, -0.12, 0.32]} scale={0.16} />
      <mesh geometry={nodes.Plane750.geometry} material={materials.leaf} position={[3.87, 2.12, -12.33]} rotation={[-1.51, 0.74, 2.27]} scale={0.12} />
      <mesh geometry={nodes.Plane751.geometry} material={materials.leaf} position={[3.17, 2.04, -11.81]} rotation={[-3.1, 0.28, 2.7]} scale={0.09} />
      <mesh geometry={nodes.Plane752.geometry} material={materials.leaf} position={[3.82, 2.47, -12.29]} rotation={[1.56, -0.36, -0.86]} scale={0.17} />
      <mesh geometry={nodes.Plane753.geometry} material={materials.leaf} position={[3.62, 1.96, -12.14]} rotation={[-0.67, 0.76, -0.7]} scale={0.08} />
      <mesh geometry={nodes.Plane754.geometry} material={materials.leaf} position={[3.47, 2.55, -11.77]} rotation={[2.26, -0.33, 0.95]} scale={0.09} />
      <mesh geometry={nodes.Plane755.geometry} material={materials.leaf} position={[3.5, 2.36, -12.38]} rotation={[0.48, 0.81, -1.08]} scale={0.16} />
      <mesh geometry={nodes.Plane756.geometry} material={materials.leaf} position={[3.31, 2.11, -12.25]} rotation={[1.09, 0.31, -1.87]} scale={0.14} />
      <mesh geometry={nodes.Plane757.geometry} material={materials.leaf} position={[3.67, 1.99, -12.19]} rotation={[0.51, 0.02, -1.89]} scale={0.19} />
      <mesh geometry={nodes.Plane758.geometry} material={materials.leaf} position={[3.11, 2.39, -11.69]} rotation={[1.94, -0.17, 2.91]} scale={0.15} />
      <mesh geometry={nodes.Plane759.geometry} material={materials.leaf} position={[3.47, 1.97, -11.87]} rotation={[-2.28, 0.13, -0.24]} scale={0.09} />
      <mesh geometry={nodes.Plane760.geometry} material={materials.leaf} position={[3.72, 2.18, -11.86]} rotation={[2.27, 0.39, 0.33]} scale={0.17} />
      <mesh geometry={nodes.Plane761.geometry} material={materials.leaf} position={[3.2, 2.25, -12.18]} rotation={[3.09, 0.04, 2.41]} scale={0.14} />
      <mesh geometry={nodes.Plane762.geometry} material={materials.leaf} position={[3.53, 2.03, -12.29]} rotation={[-0.16, -0.56, 3.13]} scale={0.15} />
      <mesh geometry={nodes.Plane763.geometry} material={materials.leaf} position={[3.47, 2.55, -11.77]} rotation={[-0.29, -0.16, -0.1]} scale={0.09} />
      <mesh geometry={nodes.Plane764.geometry} material={materials.leaf} position={[3.16, 2.12, -11.7]} rotation={[-2.69, 0, -2.14]} scale={0.14} />
      <mesh geometry={nodes.Plane765.geometry} material={materials.leaf} position={[3.44, 1.94, -12.03]} rotation={[1.77, 0.53, 1.26]} scale={0.18} />
      <mesh geometry={nodes.Plane766.geometry} material={materials.leaf} position={[3.75, 2.27, -12.45]} rotation={[-0.82, 0.63, 1.22]} scale={0.19} />
      <mesh geometry={nodes.Plane767.geometry} material={materials.leaf} position={[3.63, 2.38, -11.79]} rotation={[-2.61, -0.31, 0.01]} scale={0.1} />
      <mesh geometry={nodes.Plane768.geometry} material={materials.leaf} position={[3.49, 1.97, -11.88]} rotation={[-0.78, -0.79, -1.09]} scale={0.15} />
      <mesh geometry={nodes.Plane769.geometry} material={materials.leaf} position={[3.75, 2.27, -12.45]} rotation={[0.75, 1.03, -0.16]} scale={0.13} />
      <mesh geometry={nodes.Plane770.geometry} material={materials.leaf} position={[3.64, 2.62, -12.12]} rotation={[0, 0.07, 2.67]} scale={0.17} />
      <mesh geometry={nodes.Plane771.geometry} material={materials.leaf} position={[3.93, 2.42, -12.21]} rotation={[-2.91, -0.98, -2.03]} scale={0.09} />
      <mesh geometry={nodes.Plane772.geometry} material={materials.leaf} position={[3.67, 1.98, -12.15]} rotation={[-0.72, 0.31, -0.48]} scale={0.19} />
      <mesh geometry={nodes.Plane773.geometry} material={materials.leaf} position={[3.43, 2.45, -11.69]} rotation={[-3.02, 1.42, -1.55]} scale={0.09} />
      <mesh geometry={nodes.Plane774.geometry} material={materials.leaf} position={[3.31, 2.11, -12.25]} rotation={[-2.56, 0.16, 2.95]} scale={0.16} />
      <mesh geometry={nodes.Plane775.geometry} material={materials.leaf} position={[3.46, 2.37, -11.67]} rotation={[-3.06, 0.7, -2.35]} scale={0.13} />
      <mesh geometry={nodes.Plane776.geometry} material={materials.leaf} position={[3.43, 2.45, -11.69]} rotation={[-1.53, 0.7, -1]} scale={0.11} />
      <mesh geometry={nodes.Plane777.geometry} material={materials.leaf} position={[3.23, 1.99, -11.85]} rotation={[1.13, -0.39, 2.14]} scale={0.11} />
      <mesh geometry={nodes.Plane778.geometry} material={materials.leaf} position={[3.14, 2.53, -11.98]} rotation={[-2.58, -0.05, -0.69]} scale={0.19} />
      <mesh geometry={nodes.Plane779.geometry} material={materials.leaf} position={[3.3, 1.97, -11.94]} rotation={[2.53, 1.1, -2.59]} scale={0.09} />
      <mesh geometry={nodes.Plane780.geometry} material={materials.leaf} position={[3.1, 2.51, -11.95]} rotation={[-1.6, -0.14, -0.61]} scale={0.11} />
      <mesh geometry={nodes.Plane781.geometry} material={materials.leaf} position={[3.87, 2.38, -12.35]} rotation={[2.69, 0.09, -1.15]} scale={0.09} />
      <mesh geometry={nodes.Plane782.geometry} material={materials.leaf} position={[3.34, 2, -11.83]} rotation={[-2.66, -0.61, -2.95]} scale={0.11} />
      <mesh geometry={nodes.Plane783.geometry} material={materials.leaf} position={[3.87, 2.13, -12.32]} rotation={[1.77, -0.49, -1.94]} scale={0.15} />
      <mesh geometry={nodes.Plane784.geometry} material={materials.leaf} position={[3.81, 2.25, -12.44]} rotation={[-0.63, -0.08, -0.42]} scale={0.17} />
      <mesh geometry={nodes.Plane785.geometry} material={materials.leaf} position={[3.55, 2.23, -11.73]} rotation={[-2.49, -0.67, -1.5]} scale={0.15} />
      <mesh geometry={nodes.Plane786.geometry} material={materials.leaf} position={[3.23, 1.99, -11.85]} rotation={[-0.4, 0.48, 3.14]} scale={0.18} />
      <mesh geometry={nodes.Plane787.geometry} material={materials.leaf} position={[3.01, 2.29, -11.72]} rotation={[1.33, -0.01, 0.55]} scale={0.12} />
      <mesh geometry={nodes.Plane788.geometry} material={materials.leaf} position={[3.32, 2.05, -12.2]} rotation={[-3.05, 0.75, 1.68]} scale={0.16} />
      <mesh geometry={nodes.Plane789.geometry} material={materials.leaf} position={[3.2, 2.01, -11.83]} rotation={[-3, -0.85, -2.4]} scale={0.17} />
      <mesh geometry={nodes.Plane790.geometry} material={materials.leaf} position={[2.99, 2.34, -11.82]} rotation={[2.62, -0.18, 2.13]} scale={0.17} />
      <mesh geometry={nodes.Plane791.geometry} material={materials.leaf} position={[3.82, 2.47, -12.29]} rotation={[0.07, -1.07, 2.61]} scale={0.12} />
      <mesh geometry={nodes.Plane792.geometry} material={materials.leaf} position={[3.37, 2.63, -12.13]} rotation={[1.21, 0.14, -1.54]} scale={0.17} />
      <mesh geometry={nodes.Plane793.geometry} material={materials.leaf} position={[3.92, 2.35, -12.34]} rotation={[-0.7, 0.81, 0.65]} scale={0.13} />
      <mesh geometry={nodes.Plane794.geometry} material={materials.leaf} position={[3.51, 2.17, -12.36]} rotation={[-0.09, 0.13, -1.25]} scale={0.2} />
      <mesh geometry={nodes.Plane795.geometry} material={materials.leaf} position={[3.55, 2.02, -12.29]} rotation={[1.37, -0.85, -1.68]} scale={0.19} />
      <mesh geometry={nodes.Plane796.geometry} material={materials.leaf} position={[3.82, 2.07, -12.11]} rotation={[1.04, 0.58, 1.11]} scale={0.09} />
      <mesh geometry={nodes.Plane797.geometry} material={materials.leaf} position={[3.86, 2.42, -12.08]} rotation={[-1.86, -0.44, 0.73]} scale={0.1} />
      <mesh geometry={nodes.Plane798.geometry} material={materials.leaf} position={[3.18, 2.19, -11.61]} rotation={[0.94, -1.12, 0.75]} scale={0.08} />
      <mesh geometry={nodes.Plane799.geometry} material={materials.leaf} position={[2.99, 2.34, -11.85]} rotation={[-2.95, 0.91, 3.08]} scale={0.14} />
      <mesh geometry={nodes.Plane800.geometry} material={materials.leaf} position={[3.55, 2.23, -11.73]} rotation={[2, 1.13, 1.54]} scale={0.11} />
      <mesh geometry={nodes.Plane801.geometry} material={materials.leaf} position={[3.47, 1.97, -11.87]} rotation={[-0.61, -0.46, 0.27]} scale={0.11} />
      <mesh geometry={nodes.Plane802.geometry} material={materials.leaf} position={[3.75, 2.27, -12.45]} rotation={[-1.65, 1.37, 0.45]} scale={0.1} />
      <mesh geometry={nodes.Plane803.geometry} material={materials.leaf} position={[3.58, 2.57, -11.89]} rotation={[-1.42, 0.13, -2]} scale={0.13} />
      <mesh geometry={nodes.Plane804.geometry} material={materials.leaf} position={[3.43, 1.94, -12.01]} rotation={[-2.26, 0.39, 2.2]} scale={0.13} />
      <mesh geometry={nodes.Plane805.geometry} material={materials.leaf} position={[3.74, 2.41, -11.87]} rotation={[0.61, -1.17, 1.6]} scale={0.18} />
      <mesh geometry={nodes.Plane806.geometry} material={materials.leaf} position={[3.36, 1.96, -11.93]} rotation={[2.57, -1.16, 0.73]} scale={0.1} />
      <mesh geometry={nodes.Plane807.geometry} material={materials.leaf} position={[3.65, 2.45, -12.42]} rotation={[-1.56, 0.67, -2.79]} scale={0.1} />
      <mesh geometry={nodes.Plane808.geometry} material={materials.leaf} position={[3.17, 2.04, -11.81]} rotation={[-2.96, 0, -2.35]} scale={0.18} />
      <mesh geometry={nodes.Plane809.geometry} material={materials.leaf} position={[3.77, 2.43, -12.39]} rotation={[-2.66, 0.97, -1.54]} scale={0.13} />
      <mesh geometry={nodes.Plane810.geometry} material={materials.leaf} position={[3.22, 2, -11.83]} rotation={[2.53, 0.08, -2.44]} scale={0.19} />
      <mesh geometry={nodes.Plane811.geometry} material={materials.leaf} position={[3.6, 2.04, -12.29]} rotation={[0.58, 0.54, 0.03]} scale={0.12} />
      <mesh geometry={nodes.Plane812.geometry} material={materials.leaf} position={[3.11, 2.45, -12.04]} rotation={[-2.81, 0.28, -0.99]} scale={0.19} />
      <mesh geometry={nodes.Plane813.geometry} material={materials.leaf} position={[3.82, 2.37, -11.92]} rotation={[2.02, 0.52, 0]} scale={0.13} />
      <mesh geometry={nodes.Plane814.geometry} material={materials.leaf} position={[3.47, 2, -11.84]} rotation={[-1.08, -0.75, -2.49]} scale={0.1} />
      <mesh geometry={nodes.Plane815.geometry} material={materials.leaf} position={[3.63, 2.38, -11.79]} rotation={[0.6, -0.62, -1.07]} scale={0.11} />
      <mesh geometry={nodes.Plane816.geometry} material={materials.leaf} position={[3.06, 2.34, -12.07]} rotation={[1.2, 0.37, -2.25]} scale={0.18} />
      <mesh geometry={nodes.Plane817.geometry} material={materials.leaf} position={[3.39, 2.31, -12.35]} rotation={[-3.04, 0.38, -2.83]} scale={0.17} />
      <mesh geometry={nodes.Plane818.geometry} material={materials.leaf} position={[3.63, 2.38, -11.79]} rotation={[1.89, 0.65, 1.4]} scale={0.11} />
      <mesh geometry={nodes.Plane819.geometry} material={materials.leaf} position={[3.41, 2.27, -12.38]} rotation={[-0.83, -0.24, -2.61]} scale={0.09} />
      <mesh geometry={nodes.Plane820.geometry} material={materials.leaf} position={[3.82, 2.07, -12.11]} rotation={[-0.19, 0.71, -0.82]} scale={0.16} />
      <mesh geometry={nodes.Plane821.geometry} material={materials.leaf} position={[3.59, 2.27, -12.42]} rotation={[2.42, 0.47, -2.69]} scale={0.11} />
      <mesh geometry={nodes.Plane822.geometry} material={materials.leaf} position={[3.1, 2.51, -11.95]} rotation={[0.92, 0.73, -2.14]} scale={0.16} />
      <mesh geometry={nodes.Plane823.geometry} material={materials.leaf} position={[3.18, 2.02, -11.86]} rotation={[2.48, -0.11, -1.91]} scale={0.19} />
      <mesh geometry={nodes.Plane824.geometry} material={materials.leaf} position={[3.15, 2.14, -12.08]} rotation={[-1.46, 1.46, 1.68]} scale={0.15} />
      <mesh geometry={nodes.Plane825.geometry} material={materials.leaf} position={[3.21, 2, -11.86]} rotation={[3.11, -0.55, 1.06]} scale={0.18} />
      <mesh geometry={nodes.Plane826.geometry} material={materials.leaf} position={[3.71, 2.6, -12.2]} rotation={[0.36, 0.33, 0.85]} scale={0.16} />
      <mesh geometry={nodes.Plane827.geometry} material={materials.leaf} position={[3.38, 1.98, -12.09]} rotation={[-1.78, -0.49, 1.5]} scale={0.15} />
      <mesh geometry={nodes.Plane828.geometry} material={materials.leaf} position={[3.64, 1.97, -12.16]} rotation={[-2.74, 0.52, 1.01]} scale={0.12} />
      <mesh geometry={nodes.Plane829.geometry} material={materials.leaf} position={[3.57, 2.06, -12.32]} rotation={[-3.12, 0.33, -2.49]} scale={0.1} />
      <mesh geometry={nodes.Plane830.geometry} material={materials.leaf} position={[3.5, 2.36, -12.38]} rotation={[0.71, 1.09, 0.66]} scale={0.11} />
      <mesh geometry={nodes.Plane831.geometry} material={materials.leaf} position={[3.37, 2.63, -12.13]} rotation={[-1.87, 0.8, -2.06]} scale={0.17} />
      <mesh geometry={nodes.Plane832.geometry} material={materials.leaf} position={[3.84, 2.38, -11.97]} rotation={[-2.49, -0.11, -1.43]} scale={0.11} />
      <mesh geometry={nodes.Plane833.geometry} material={materials.leaf} position={[3.67, 2.02, -11.99]} rotation={[-1.07, -0.45, -1.19]} scale={0.15} />
      <mesh geometry={nodes.Plane834.geometry} material={materials.leaf} position={[3.64, 1.97, -12.16]} rotation={[-0.17, 0.96, 0.61]} scale={0.12} />
      <mesh geometry={nodes.Plane835.geometry} material={materials.leaf} position={[3.48, 1.95, -12.05]} rotation={[-0.26, 0.8, -2.16]} scale={0.12} />
      <mesh geometry={nodes.Plane836.geometry} material={materials.leaf} position={[3.39, 2.56, -12.21]} rotation={[1.97, -0.51, -2.48]} scale={0.17} />
      <mesh geometry={nodes.Plane837.geometry} material={materials.leaf} position={[2.98, 2.3, -11.82]} rotation={[2.47, -0.55, 1.82]} scale={0.09} />
      <mesh geometry={nodes.Plane838.geometry} material={materials.leaf} position={[3.6, 2.46, -12.39]} rotation={[-1.51, 0.4, 2.45]} scale={0.19} />
      <mesh geometry={nodes.Plane839.geometry} material={materials.leaf} position={[3.55, 2.23, -11.73]} rotation={[2.31, -0.3, 2.82]} scale={0.17} />
      <mesh geometry={nodes.Plane840.geometry} material={materials.leaf} position={[3.41, 2.27, -12.38]} rotation={[1.41, 0.41, -1.82]} scale={0.17} />
      <mesh geometry={nodes.Plane841.geometry} material={materials.leaf} position={[3.01, 2.29, -11.72]} rotation={[-1.14, -0.45, -1.18]} scale={0.1} />
      <mesh geometry={nodes.Plane842.geometry} material={materials.leaf} position={[3.11, 2.23, -11.65]} rotation={[-0.54, -0.73, -1.54]} scale={0.09} />
      <mesh geometry={nodes.Plane843.geometry} material={materials.leaf} position={[3.1, 2.51, -11.97]} rotation={[2.85, -0.13, -2.2]} scale={0.11} />
      <mesh geometry={nodes.Plane844.geometry} material={materials.leaf} position={[3.22, 2, -11.89]} rotation={[-2.84, 0.08, 1.36]} scale={0.18} />
      <mesh geometry={nodes.Plane845.geometry} material={materials.leaf} position={[2.65, 1.68, -11.68]} rotation={[-0.56, 0.06, -2.71]} scale={0.1} />
      <mesh geometry={nodes.Plane846.geometry} material={materials.leaf} position={[2.8, 2.03, -11.84]} rotation={[-1.18, 0.75, 0.93]} scale={0.17} />
      <mesh geometry={nodes.Plane847.geometry} material={materials.leaf} position={[2.58, 1.8, -11.96]} rotation={[2.6, 0.27, -0.8]} scale={0.08} />
      <mesh geometry={nodes.Plane848.geometry} material={materials.leaf} position={[2.39, 1.91, -11.71]} rotation={[-2.75, -0.24, -3.1]} scale={0.13} />
      <mesh geometry={nodes.Plane849.geometry} material={materials.leaf} position={[2.47, 1.95, -11.37]} rotation={[-2.32, 0.03, -2.19]} scale={0.14} />
      <mesh geometry={nodes.Plane850.geometry} material={materials.leaf} position={[2.52, 2.04, -11.8]} rotation={[2.78, 0.46, -0.34]} scale={0.19} />
      <mesh geometry={nodes.Plane851.geometry} material={materials.leaf} position={[2.47, 1.79, -11.38]} rotation={[-0.46, 0.14, -1.68]} scale={0.15} />
      <mesh geometry={nodes.Plane852.geometry} material={materials.leaf} position={[2.86, 1.87, -12.13]} rotation={[-0.45, 1.08, -0.2]} scale={0.11} />
      <mesh geometry={nodes.Plane853.geometry} material={materials.leaf} position={[2.86, 1.81, -11.84]} rotation={[0.09, -0.33, 1.32]} scale={0.15} />
      <mesh geometry={nodes.Plane854.geometry} material={materials.leaf} position={[2.79, 1.72, -11.85]} rotation={[2.67, 0.68, 1.92]} scale={0.19} />
      <mesh geometry={nodes.Plane855.geometry} material={materials.leaf} position={[2.59, 2.06, -11.59]} rotation={[2.17, -0.37, 2.23]} scale={0.14} />
      <mesh geometry={nodes.Plane856.geometry} material={materials.leaf} position={[2.8, 2, -11.78]} rotation={[-0.98, 0.57, 0.26]} scale={0.08} />
      <mesh geometry={nodes.Plane857.geometry} material={materials.leaf} position={[2.89, 1.9, -12.03]} rotation={[0.21, 0.85, -0.57]} scale={0.17} />
      <mesh geometry={nodes.Plane858.geometry} material={materials.leaf} position={[2.37, 1.98, -11.53]} rotation={[1.84, -0.99, -3.07]} scale={0.1} />
      <mesh geometry={nodes.Plane859.geometry} material={materials.leaf} position={[2.66, 1.96, -11.51]} rotation={[1.15, 0.84, 2.82]} scale={0.12} />
      <mesh geometry={nodes.Plane860.geometry} material={materials.leaf} position={[2.84, 1.77, -12.04]} rotation={[-0.46, 0.75, 0.84]} scale={0.13} />
      <mesh geometry={nodes.Plane861.geometry} material={materials.leaf} position={[2.49, 1.97, -11.84]} rotation={[-2.64, -0.25, 2.05]} scale={0.19} />
      <mesh geometry={nodes.Plane862.geometry} material={materials.leaf} position={[2.78, 1.91, -11.66]} rotation={[0.93, -0.93, 2.29]} scale={0.13} />
      <mesh geometry={nodes.Plane863.geometry} material={materials.leaf} position={[2.73, 1.94, -12.1]} rotation={[-1.71, 0.47, 1.28]} scale={0.12} />
      <mesh geometry={nodes.Plane864.geometry} material={materials.leaf} position={[2.59, 2.06, -11.59]} rotation={[0.35, -0.33, 0.89]} scale={0.1} />
      <mesh geometry={nodes.Plane865.geometry} material={materials.leaf} position={[2.86, 1.78, -11.92]} rotation={[1.71, 0.22, 0]} scale={0.15} />
      <mesh geometry={nodes.Plane866.geometry} material={materials.leaf} position={[2.37, 1.8, -11.4]} rotation={[0.13, -0.99, -2.6]} scale={0.12} />
      <mesh geometry={nodes.Plane867.geometry} material={materials.leaf} position={[2.57, 2.06, -11.81]} rotation={[0.88, -0.02, 1.04]} scale={0.11} />
      <mesh geometry={nodes.Plane868.geometry} material={materials.leaf} position={[2.36, 1.95, -11.51]} rotation={[2.75, 0.73, 2.75]} scale={0.18} />
      <mesh geometry={nodes.Plane869.geometry} material={materials.leaf} position={[2.52, 1.7, -11.74]} rotation={[0.98, 0.89, 2.73]} scale={0.09} />
      <mesh geometry={nodes.Plane870.geometry} material={materials.leaf} position={[2.8, 2.03, -11.84]} rotation={[-1.47, 0.16, 1.24]} scale={0.2} />
      <mesh geometry={nodes.Plane871.geometry} material={materials.leaf} position={[2.88, 1.87, -12.05]} rotation={[1.1, 0.58, 0.93]} scale={0.18} />
      <mesh geometry={nodes.Plane872.geometry} material={materials.leaf} position={[2.33, 1.85, -11.43]} rotation={[3.06, 0.18, 2.98]} scale={0.11} />
      <mesh geometry={nodes.Plane873.geometry} material={materials.leaf} position={[2.47, 1.95, -11.37]} rotation={[-2.12, -0.72, -2.26]} scale={0.16} />
      <mesh geometry={nodes.Plane874.geometry} material={materials.leaf} position={[2.73, 1.92, -12.11]} rotation={[2.24, -0.28, 0.3]} scale={0.09} />
      <mesh geometry={nodes.Plane875.geometry} material={materials.leaf} position={[2.37, 1.97, -11.54]} rotation={[-0.43, -1.2, -1.61]} scale={0.18} />
      <mesh geometry={nodes.Plane876.geometry} material={materials.leaf} position={[2.76, 2.02, -12.01]} rotation={[0.74, -1.26, -2.32]} scale={0.17} />
      <mesh geometry={nodes.Plane877.geometry} material={materials.leaf} position={[2.86, 1.81, -11.84]} rotation={[-2.19, 0.55, 0.8]} scale={0.14} />
      <mesh geometry={nodes.Plane878.geometry} material={materials.leaf} position={[2.62, 1.79, -11.46]} rotation={[0.93, -0.38, -0.15]} scale={0.1} />
      <mesh geometry={nodes.Plane879.geometry} material={materials.leaf} position={[2.4, 1.98, -11.44]} rotation={[0, -0.81, 2.27]} scale={0.15} />
      <mesh geometry={nodes.Plane880.geometry} material={materials.leaf} position={[2.8, 2.01, -11.99]} rotation={[1.08, 0.33, -2.41]} scale={0.15} />
      <mesh geometry={nodes.Plane881.geometry} material={materials.leaf} position={[2.41, 2.02, -11.5]} rotation={[2.09, 0.58, -2.71]} scale={0.17} />
      <mesh geometry={nodes.Plane882.geometry} material={materials.leaf} position={[2.4, 1.98, -11.44]} rotation={[-1.33, -0.86, -0.96]} scale={0.17} />
      <mesh geometry={nodes.Plane883.geometry} material={materials.leaf} position={[2.52, 1.82, -11.92]} rotation={[2.48, -0.91, -2.28]} scale={0.09} />
      <mesh geometry={nodes.Plane884.geometry} material={materials.leaf} position={[2.33, 1.85, -11.43]} rotation={[-1.84, -0.79, -1.94]} scale={0.11} />
      <mesh geometry={nodes.Plane885.geometry} material={materials.leaf} position={[2.33, 1.88, -11.46]} rotation={[2.83, -1.07, -1.97]} scale={0.19} />
      <mesh geometry={nodes.Plane886.geometry} material={materials.leaf} position={[2.88, 1.87, -12.05]} rotation={[-0.69, 0.96, -1.17]} scale={0.15} />
      <mesh geometry={nodes.Plane887.geometry} material={materials.leaf} position={[2.79, 1.72, -11.85]} rotation={[0.28, 1.02, -0.41]} scale={0.09} />
      <mesh geometry={nodes.Plane888.geometry} material={materials.leaf} position={[2.37, 1.81, -11.38]} rotation={[0.19, 0.43, 1.87]} scale={0.11} />
      <mesh geometry={nodes.Plane889.geometry} material={materials.leaf} position={[2.41, 1.77, -11.66]} rotation={[1.92, 0.17, 2.03]} scale={0.15} />
      <mesh geometry={nodes.Plane890.geometry} material={materials.leaf} position={[2.46, 1.83, -11.35]} rotation={[-2.52, 0.35, 2.06]} scale={0.14} />
      <mesh geometry={nodes.Plane891.geometry} material={materials.leaf} position={[2.39, 1.76, -11.55]} rotation={[0.19, 1.01, -2.24]} scale={0.11} />
      <mesh geometry={nodes.Plane892.geometry} material={materials.leaf} position={[2.34, 1.85, -11.38]} rotation={[-3.04, -0.9, -2.69]} scale={0.18} />
      <mesh geometry={nodes.Plane893.geometry} material={materials.leaf} position={[2.89, 1.85, -11.92]} rotation={[0.02, 0.99, 1.29]} scale={0.1} />
      <mesh geometry={nodes.Plane894.geometry} material={materials.leaf} position={[2.6, 1.71, -11.89]} rotation={[2.12, 0.58, -1.27]} scale={0.14} />
      <mesh geometry={nodes.Plane895.geometry} material={materials.leaf} position={[2.58, 1.8, -11.96]} rotation={[-1.76, -0.89, 2.75]} scale={0.09} />
      <mesh geometry={nodes.Plane896.geometry} material={materials.leaf} position={[2.39, 1.99, -11.46]} rotation={[-0.11, 0.18, -1.61]} scale={0.2} />
      <mesh geometry={nodes.Plane897.geometry} material={materials.leaf} position={[2.52, 1.99, -11.87]} rotation={[-2.57, 0.46, -2.97]} scale={0.14} />
      <mesh geometry={nodes.Plane898.geometry} material={materials.leaf} position={[2.86, 1.85, -12.11]} rotation={[-1.02, 0.86, 0.11]} scale={0.11} />
      <mesh geometry={nodes.Plane899.geometry} material={materials.leaf} position={[2.39, 1.91, -11.71]} rotation={[2.89, -1.12, -1.95]} scale={0.11} />
      <mesh geometry={nodes.Plane900.geometry} material={materials.leaf} position={[2.35, 1.9, -11.6]} rotation={[-0.2, -1.08, 0.65]} scale={0.11} />
      <mesh geometry={nodes.Plane901.geometry} material={materials.leaf} position={[2.41, 1.77, -11.66]} rotation={[-1.63, -1.07, -3.05]} scale={0.12} />
      <mesh geometry={nodes.Plane902.geometry} material={materials.leaf} position={[2.39, 1.88, -11.7]} rotation={[2.34, -0.63, -2.89]} scale={0.09} />
      <mesh geometry={nodes.Plane903.geometry} material={materials.leaf} position={[2.56, 2.07, -11.62]} rotation={[-2.49, -0.19, 2.43]} scale={0.14} />
      <mesh geometry={nodes.Plane904.geometry} material={materials.leaf} position={[2.76, 1.94, -12.1]} rotation={[-1.17, 0.04, -0.76]} scale={0.1} />
      <mesh geometry={nodes.Plane905.geometry} material={materials.leaf} position={[2.61, 1.89, -11.44]} rotation={[-1.69, 1.3, -2.41]} scale={0.17} />
      <mesh geometry={nodes.Plane906.geometry} material={materials.leaf} position={[2.53, 1.84, -11.94]} rotation={[-2.2, -0.63, -2.44]} scale={0.16} />
      <mesh geometry={nodes.Plane907.geometry} material={materials.leaf} position={[2.48, 2.04, -11.7]} rotation={[2.95, 0.46, -1.7]} scale={0.09} />
      <mesh geometry={nodes.Plane908.geometry} material={materials.leaf} position={[2.66, 1.71, -11.94]} rotation={[-1.08, -1.01, -2.44]} scale={0.11} />
      <mesh geometry={nodes.Plane909.geometry} material={materials.leaf} position={[2.39, 1.99, -11.45]} rotation={[1.78, 0.08, -2.1]} scale={0.12} />
      <mesh geometry={nodes.Plane910.geometry} material={materials.leaf} position={[2.4, 1.85, -11.72]} rotation={[2.92, -1.14, -1.89]} scale={0.1} />
      <mesh geometry={nodes.Plane911.geometry} material={materials.leaf} position={[2.63, 1.77, -11.49]} rotation={[2.2, 0.58, 1.5]} scale={0.12} />
      <mesh geometry={nodes.Plane912.geometry} material={materials.leaf} position={[2.49, 1.97, -11.84]} rotation={[3.12, 0.24, -2.65]} scale={0.18} />
      <mesh geometry={nodes.Plane913.geometry} material={materials.leaf} position={[2.54, 1.69, -11.73]} rotation={[1.82, 0.19, 3.04]} scale={0.09} />
      <mesh geometry={nodes.Plane914.geometry} material={materials.leaf} position={[2.46, 1.83, -11.35]} rotation={[0.51, -0.93, 0.9]} scale={0.17} />
      <mesh geometry={nodes.Plane915.geometry} material={materials.leaf} position={[2.57, 2.06, -11.81]} rotation={[-2.57, 0.06, -1.3]} scale={0.18} />
      <mesh geometry={nodes.Plane916.geometry} material={materials.leaf} position={[2.64, 1.74, -11.54]} rotation={[2.44, -1.17, 2.79]} scale={0.19} />
      <mesh geometry={nodes.Plane917.geometry} material={materials.leaf} position={[2.5, 1.7, -11.57]} rotation={[2.86, -0.97, 2.62]} scale={0.14} />
      <mesh geometry={nodes.Plane918.geometry} material={materials.leaf} position={[2.51, 1.7, -11.72]} rotation={[-2.42, 0.17, -1.97]} scale={0.08} />
      <mesh geometry={nodes.Plane919.geometry} material={materials.leaf} position={[2.73, 1.74, -11.67]} rotation={[0.76, -0.27, 0.86]} scale={0.17} />
      <mesh geometry={nodes.Plane920.geometry} material={materials.leaf} position={[2.75, 1.76, -11.66]} rotation={[-0.35, -0.53, -2.81]} scale={0.17} />
      <mesh geometry={nodes.Plane921.geometry} material={materials.leaf} position={[2.68, 1.99, -11.54]} rotation={[0.76, -0.31, -0.03]} scale={0.16} />
      <mesh geometry={nodes.Plane922.geometry} material={materials.leaf} position={[2.4, 1.85, -11.72]} rotation={[2.39, 0.08, -1.27]} scale={0.18} />
      <mesh geometry={nodes.Plane923.geometry} material={materials.leaf} position={[2.88, 1.95, -11.97]} rotation={[0.26, 1.45, 0.6]} scale={0.15} />
      <mesh geometry={nodes.Plane924.geometry} material={materials.leaf} position={[2.49, 1.97, -11.84]} rotation={[-2.42, 0.13, 1.69]} scale={0.19} />
      <mesh geometry={nodes.Plane925.geometry} material={materials.leaf} position={[2.8, 1.99, -12.04]} rotation={[1.66, 0.76, -0.61]} scale={0.13} />
      <mesh geometry={nodes.Plane926.geometry} material={materials.leaf} position={[2.54, 1.83, -11.94]} rotation={[-1.67, -0.22, 2.16]} scale={0.15} />
      <mesh geometry={nodes.Plane927.geometry} material={materials.leaf} position={[2.47, 1.76, -11.8]} rotation={[2.4, 0.35, 2.95]} scale={0.09} />
      <mesh geometry={nodes.Plane928.geometry} material={materials.leaf} position={[2.6, 1.9, -12.01]} rotation={[1.61, -0.03, -2.49]} scale={0.1} />
      <mesh geometry={nodes.Plane929.geometry} material={materials.leaf} position={[2.59, 1.68, -11.68]} rotation={[-1.07, -0.26, -1.33]} scale={0.13} />
      <mesh geometry={nodes.Plane930.geometry} material={materials.leaf} position={[2.84, 1.88, -12.13]} rotation={[1.82, -0.36, -0.11]} scale={0.13} />
      <mesh geometry={nodes.Plane931.geometry} material={materials.leaf} position={[2.4, 1.78, -11.42]} rotation={[-3.03, -0.1, 1.59]} scale={0.12} />
      <mesh geometry={nodes.Plane932.geometry} material={materials.leaf} position={[2.78, 2.01, -12.01]} rotation={[0.3, 0.14, 1.31]} scale={0.1} />
      <mesh geometry={nodes.Plane933.geometry} material={materials.leaf} position={[2.37, 1.81, -11.38]} rotation={[-2.58, -1.13, 2.15]} scale={0.11} />
      <mesh geometry={nodes.Plane934.geometry} material={materials.leaf} position={[2.66, 1.7, -11.92]} rotation={[-0.05, 0.67, 0.86]} scale={0.13} />
      <mesh geometry={nodes.Plane935.geometry} material={materials.leaf} position={[2.74, 2.04, -11.74]} rotation={[-1.13, 0.31, 1.33]} scale={0.08} />
      <mesh geometry={nodes.Plane936.geometry} material={materials.leaf} position={[2.76, 2.02, -12.01]} rotation={[0.74, -0.78, 1.55]} scale={0.12} />
      <mesh geometry={nodes.Plane937.geometry} material={materials.leaf} position={[2.49, 1.74, -11.79]} rotation={[1.65, 0.62, 2.94]} scale={0.16} />
      <mesh geometry={nodes.Plane938.geometry} material={materials.leaf} position={[2.87, 1.8, -11.91]} rotation={[-0.54, 0.57, -0.36]} scale={0.16} />
      <mesh geometry={nodes.Plane939.geometry} material={materials.leaf} position={[2.88, 1.8, -11.93]} rotation={[2.87, -1.1, 0.41]} scale={0.19} />
      <mesh geometry={nodes.Plane940.geometry} material={materials.leaf} position={[2.59, 1.86, -11.42]} rotation={[-0.51, 0.75, -1.04]} scale={0.09} />
      <mesh geometry={nodes.Plane941.geometry} material={materials.leaf} position={[2.73, 1.97, -12.08]} rotation={[-1.16, 1.09, 0.91]} scale={0.11} />
      <mesh geometry={nodes.Plane942.geometry} material={materials.leaf} position={[2.57, 2.06, -11.81]} rotation={[2.1, -0.29, -2.42]} scale={0.09} />
      <mesh geometry={nodes.Plane943.geometry} material={materials.leaf} position={[2.41, 1.74, -11.55]} rotation={[2.41, 0.81, 2.11]} scale={0.18} />
      <mesh geometry={nodes.Plane944.geometry} material={materials.leaf} position={[2.79, 1.72, -11.85]} rotation={[1.92, 0.76, -1.04]} scale={0.13} />
      <mesh geometry={nodes.Plane945.geometry} material={materials.leaf} position={[2.39, 1.99, -11.45]} rotation={[1.39, 0.49, -2.2]} scale={0.14} />
      <mesh geometry={nodes.Plane946.geometry} material={materials.leaf} position={[2.77, 1.86, -11.65]} rotation={[-0.08, -0.69, 0.03]} scale={0.15} />
      <mesh geometry={nodes.Plane947.geometry} material={materials.leaf} position={[2.66, 1.71, -11.94]} rotation={[-0.3, -0.54, -0.54]} scale={0.1} />
      <mesh geometry={nodes.Plane948.geometry} material={materials.leaf} position={[2.56, 2.07, -11.62]} rotation={[-2, 0.18, -1.79]} scale={0.19} />
      <mesh geometry={nodes.Plane949.geometry} material={materials.leaf} position={[2.44, 1.92, -11.37]} rotation={[-2.86, 0.67, -2.02]} scale={0.11} />
      <mesh geometry={nodes.Plane950.geometry} material={materials.leaf} position={[2.52, 1.7, -11.74]} rotation={[-1.48, 0.17, 1.95]} scale={0.08} />
      <mesh geometry={nodes.Plane951.geometry} material={materials.leaf} position={[2.49, 1.95, -11.38]} rotation={[-1.84, -0.47, -3.11]} scale={0.12} />
      <mesh geometry={nodes.Plane952.geometry} material={materials.leaf} position={[2.66, 1.7, -11.92]} rotation={[-1.87, 0.54, -0.29]} scale={0.19} />
      <mesh geometry={nodes.Plane953.geometry} material={materials.leaf} position={[2.65, 1.99, -11.52]} rotation={[-2.55, 0.19, -1.12]} scale={0.15} />
      <mesh geometry={nodes.Plane954.geometry} material={materials.leaf} position={[2.69, 1.89, -11.52]} rotation={[-1.09, -0.33, -0.89]} scale={0.12} />
      <mesh geometry={nodes.Plane955.geometry} material={materials.leaf} position={[2.4, 1.78, -11.42]} rotation={[-0.99, 0.85, 2.96]} scale={0.18} />
      <mesh geometry={nodes.Plane956.geometry} material={materials.leaf} position={[2.61, 1.89, -11.44]} rotation={[2.31, -0.43, 2.3]} scale={0.08} />
      <mesh geometry={nodes.Plane957.geometry} material={materials.leaf} position={[2.33, 1.88, -11.46]} rotation={[3.07, 1.21, -2.71]} scale={0.18} />
      <mesh geometry={nodes.Plane958.geometry} material={materials.leaf} position={[2.42, 1.89, -11.76]} rotation={[1.51, -0.07, -1.8]} scale={0.08} />
      <mesh geometry={nodes.Plane959.geometry} material={materials.leaf} position={[2.44, 2.03, -11.52]} rotation={[2.06, -0.29, -2.71]} scale={0.18} />
      <mesh geometry={nodes.Plane960.geometry} material={materials.leaf} position={[2.53, 1.84, -11.94]} rotation={[-2.33, 0.04, 2.5]} scale={0.18} />
      <mesh geometry={nodes.Plane961.geometry} material={materials.leaf} position={[2.77, 1.86, -11.65]} rotation={[1.41, -0.26, 1.26]} scale={0.14} />
      <mesh geometry={nodes.Plane962.geometry} material={materials.leaf} position={[2.67, 1.81, -11.52]} rotation={[-0.56, -0.12, -0.55]} scale={0.12} />
      <mesh geometry={nodes.Plane963.geometry} material={materials.leaf} position={[2.77, 1.76, -11.69]} rotation={[-0.07, 0.65, -1.32]} scale={0.1} />
      <mesh geometry={nodes.Plane964.geometry} material={materials.leaf} position={[2.79, 1.74, -12]} rotation={[1.7, -0.07, -2.46]} scale={0.09} />
      <mesh geometry={nodes.Plane965.geometry} material={materials.leaf} position={[2.26, 2, -11.25]} rotation={[1.57, -1.03, -0.89]} scale={0.13} />
      <mesh geometry={nodes.Plane966.geometry} material={materials.leaf} position={[2.64, 2.04, -10.92]} rotation={[0.71, 0.28, -1.07]} scale={0.18} />
      <mesh geometry={nodes.Plane967.geometry} material={materials.leaf} position={[2.61, 2.19, -11.14]} rotation={[-2.17, -0.03, -1.31]} scale={0.15} />
      <mesh geometry={nodes.Plane968.geometry} material={materials.leaf} position={[2.58, 2.19, -11.21]} rotation={[-1.47, 0.33, 2.3]} scale={0.12} />
      <mesh geometry={nodes.Plane969.geometry} material={materials.leaf} position={[2.3, 2.03, -11.47]} rotation={[1.82, -0.02, -2.13]} scale={0.17} />
      <mesh geometry={nodes.Plane970.geometry} material={materials.leaf} position={[2.28, 2.14, -11.19]} rotation={[3.08, 0.66, -0.62]} scale={0.13} />
      <mesh geometry={nodes.Plane971.geometry} material={materials.leaf} position={[2.66, 2.14, -11.04]} rotation={[0.54, 0.57, 1.34]} scale={0.18} />
      <mesh geometry={nodes.Plane972.geometry} material={materials.leaf} position={[2.65, 1.99, -11.04]} rotation={[0.1, -0.89, -0.93]} scale={0.18} />
      <mesh geometry={nodes.Plane973.geometry} material={materials.leaf} position={[2.3, 2.24, -11.3]} rotation={[1.07, -1.14, -2.85]} scale={0.14} />
      <mesh geometry={nodes.Plane974.geometry} material={materials.leaf} position={[2.27, 2.18, -11.47]} rotation={[2.47, 0.8, -2.02]} scale={0.13} />
      <mesh geometry={nodes.Plane975.geometry} material={materials.leaf} position={[2.63, 2.17, -11.04]} rotation={[2.69, 0.29, -0.56]} scale={0.18} />
      <mesh geometry={nodes.Plane976.geometry} material={materials.leaf} position={[2.53, 2.21, -11.28]} rotation={[2.04, 1.14, -0.69]} scale={0.08} />
      <mesh geometry={nodes.Plane977.geometry} material={materials.leaf} position={[2.47, 2.09, -11.4]} rotation={[0.03, -0.01, 0.3]} scale={0.08} />
      <mesh geometry={nodes.Plane978.geometry} material={materials.leaf} position={[2.63, 2.1, -11.16]} rotation={[3.09, -0.61, 0.17]} scale={0.18} />
      <mesh geometry={nodes.Plane979.geometry} material={materials.leaf} position={[2.4, 2.14, -11.03]} rotation={[2.96, 0.55, -2.39]} scale={0.15} />
      <mesh geometry={nodes.Plane980.geometry} material={materials.leaf} position={[2.63, 2.03, -10.9]} rotation={[-2.67, 0.44, -1.69]} scale={0.15} />
      <mesh geometry={nodes.Plane981.geometry} material={materials.leaf} position={[2.33, 1.94, -11.16]} rotation={[-2.84, -0.08, -1.99]} scale={0.1} />
      <mesh geometry={nodes.Plane982.geometry} material={materials.leaf} position={[2.34, 2.12, -11.48]} rotation={[-3.07, 0.93, 2.6]} scale={0.18} />
      <mesh geometry={nodes.Plane983.geometry} material={materials.leaf} position={[2.64, 1.96, -11.01]} rotation={[-1.05, -0.13, -1.42]} scale={0.15} />
      <mesh geometry={nodes.Plane984.geometry} material={materials.leaf} position={[2.48, 1.91, -11.23]} rotation={[-0.62, -0.64, 2.79]} scale={0.19} />
      <mesh geometry={nodes.Plane985.geometry} material={materials.leaf} position={[2.42, 2.06, -11.43]} rotation={[-1.47, 0.09, -0.19]} scale={0.13} />
      <mesh geometry={nodes.Plane986.geometry} material={materials.leaf} position={[2.26, 2, -11.25]} rotation={[-2.46, -0.37, 1.13]} scale={0.15} />
      <mesh geometry={nodes.Plane987.geometry} material={materials.leaf} position={[2.56, 1.92, -11.01]} rotation={[-0.89, 1.34, -0.85]} scale={0.09} />
      <mesh geometry={nodes.Plane988.geometry} material={materials.leaf} position={[2.23, 2.09, -11.28]} rotation={[-2.85, -0.78, -2.92]} scale={0.1} />
      <mesh geometry={nodes.Plane989.geometry} material={materials.leaf} position={[2.49, 1.9, -11.21]} rotation={[-1.23, 0.07, -2.41]} scale={0.18} />
      <mesh geometry={nodes.Plane990.geometry} material={materials.leaf} position={[2.28, 2.19, -11.45]} rotation={[-2.87, 0.11, 2.36]} scale={0.12} />
      <mesh geometry={nodes.Plane991.geometry} material={materials.leaf} position={[2.65, 2.14, -10.97]} rotation={[0.61, -0.17, 2.43]} scale={0.16} />
      <mesh geometry={nodes.Plane992.geometry} material={materials.leaf} position={[2.3, 2.11, -11.15]} rotation={[-1.86, -0.2, -1.29]} scale={0.09} />
      <mesh geometry={nodes.Plane993.geometry} material={materials.leaf} position={[2.66, 2.08, -11.08]} rotation={[1.24, 0.57, 0.56]} scale={0.13} />
      <mesh geometry={nodes.Plane994.geometry} material={materials.leaf} position={[2.34, 2.12, -11.48]} rotation={[0.74, 0.85, -0.77]} scale={0.2} />
      <mesh geometry={nodes.Plane995.geometry} material={materials.leaf} position={[2.36, 1.94, -11.11]} rotation={[1.74, 0.02, -2.53]} scale={0.08} />
      <mesh geometry={nodes.Plane996.geometry} material={materials.leaf} position={[2.56, 1.92, -11.01]} rotation={[2.93, -0.53, -0.34]} scale={0.17} />
      <mesh geometry={nodes.Plane997.geometry} material={materials.leaf} position={[2.51, 2.06, -11.34]} rotation={[-0.24, 0.4, 0.47]} scale={0.09} />
      <mesh geometry={nodes.Plane998.geometry} material={materials.leaf} position={[2.35, 1.99, -11.07]} rotation={[2.32, 0.15, 2.32]} scale={0.16} />
      <mesh geometry={nodes.Plane999.geometry} material={materials.leaf} position={[2.39, 2.2, -11.43]} rotation={[-1.79, 0.39, -2.73]} scale={0.17} />
      <mesh geometry={nodes.Plane1000.geometry} material={materials.leaf} position={[2.62, 1.95, -11.08]} rotation={[-2.88, -1.35, 2.74]} scale={0.19} />
      <mesh geometry={nodes.Plane1001.geometry} material={materials.leaf} position={[2.45, 1.9, -11.24]} rotation={[-1.21, 0.21, -0.53]} scale={0.15} />
      <mesh geometry={nodes.Plane1002.geometry} material={materials.leaf} position={[2.36, 1.98, -11.42]} rotation={[2.86, 1.14, -1.47]} scale={0.13} />
      <mesh geometry={nodes.Plane1003.geometry} material={materials.leaf} position={[2.37, 2.25, -11.21]} rotation={[1.2, 0.37, -0.82]} scale={0.19} />
      <mesh geometry={nodes.Plane1004.geometry} material={materials.leaf} position={[2.24, 2.16, -11.46]} rotation={[2.17, -0.64, -1.82]} scale={0.19} />
      <mesh geometry={nodes.Plane1005.geometry} material={materials.leaf} position={[2.3, 1.95, -11.36]} rotation={[1.76, -0.65, -1.54]} scale={0.18} />
      <mesh geometry={nodes.Plane1006.geometry} material={materials.leaf} position={[2.41, 2.25, -11.13]} rotation={[-0.45, -0.36, 0.47]} scale={0.17} />
      <mesh geometry={nodes.Plane1007.geometry} material={materials.leaf} position={[2.25, 1.99, -11.31]} rotation={[2.8, 0.58, 2.12]} scale={0.1} />
      <mesh geometry={nodes.Plane1008.geometry} material={materials.leaf} position={[2.36, 2.04, -11.06]} rotation={[-1.7, -0.34, -2.77]} scale={0.14} />
      <mesh geometry={nodes.Plane1009.geometry} material={materials.leaf} position={[2.58, 2.22, -11.05]} rotation={[2.22, -0.88, 1.84]} scale={0.13} />
      <mesh geometry={nodes.Plane1010.geometry} material={materials.leaf} position={[2.37, 1.9, -11.27]} rotation={[2.43, -0.58, -3.14]} scale={0.1} />
      <mesh geometry={nodes.Plane1011.geometry} material={materials.leaf} position={[2.65, 1.99, -11.04]} rotation={[-0.76, -0.72, -0.59]} scale={0.17} />
      <mesh geometry={nodes.Plane1012.geometry} material={materials.leaf} position={[2.58, 2.17, -10.95]} rotation={[-0.06, 0.22, 0.46]} scale={0.13} />
      <mesh geometry={nodes.Plane1013.geometry} material={materials.leaf} position={[2.54, 2.18, -10.96]} rotation={[-1.05, -1.38, -0.42]} scale={0.18} />
      <mesh geometry={nodes.Plane1014.geometry} material={materials.leaf} position={[2.61, 2.07, -10.9]} rotation={[0.81, -0.65, -0.17]} scale={0.11} />
      <mesh geometry={nodes.Plane1015.geometry} material={materials.leaf} position={[2.57, 1.98, -10.91]} rotation={[-2.61, -0.17, -1.46]} scale={0.09} />
      <mesh geometry={nodes.Plane1016.geometry} material={materials.leaf} position={[2.43, 1.89, -11.14]} rotation={[-1.67, -1.28, 2.05]} scale={0.11} />
      <mesh geometry={nodes.Plane1017.geometry} material={materials.leaf} position={[2.41, 2.15, -11.02]} rotation={[2.18, -0.57, -2.79]} scale={0.14} />
      <mesh geometry={nodes.Plane1018.geometry} material={materials.leaf} position={[2.27, 2.14, -11.5]} rotation={[-1.66, 0.64, 0.88]} scale={0.13} />
      <mesh geometry={nodes.Plane1019.geometry} material={materials.leaf} position={[2.45, 1.9, -11.24]} rotation={[0.78, 0.91, -2.75]} scale={0.12} />
      <mesh geometry={nodes.Plane1020.geometry} material={materials.leaf} position={[2.21, 2.14, -11.4]} rotation={[-0.88, 0.12, -2.76]} scale={0.15} />
      <mesh geometry={nodes.Plane1021.geometry} material={materials.leaf} position={[2.24, 2.19, -11.41]} rotation={[-1.82, 0.9, 2.43]} scale={0.12} />
      <mesh geometry={nodes.Plane1022.geometry} material={materials.leaf} position={[2.58, 2.19, -11.21]} rotation={[-0.77, 0.53, 0.33]} scale={0.16} />
      <mesh geometry={nodes.Plane1023.geometry} material={materials.leaf} position={[2.29, 1.99, -11.17]} rotation={[1.57, -0.49, 2.51]} scale={0.1} />
      <mesh geometry={nodes.Plane1024.geometry} material={materials.leaf} position={[2.54, 1.96, -11.25]} rotation={[-0.43, -0.1, -1.19]} scale={0.08} />
      <mesh geometry={nodes.Plane1025.geometry} material={materials.leaf} position={[2.49, 1.9, -11.21]} rotation={[-0.86, -0.18, 0.25]} scale={0.12} />
      <mesh geometry={nodes.Plane1026.geometry} material={materials.leaf} position={[2.61, 2.07, -10.9]} rotation={[1.87, -0.04, 1.75]} scale={0.16} />
      <mesh geometry={nodes.Plane1027.geometry} material={materials.leaf} position={[2.66, 2.01, -10.97]} rotation={[-0.63, -0.48, -2.32]} scale={0.14} />
      <mesh geometry={nodes.Plane1028.geometry} material={materials.leaf} position={[2.37, 2.27, -11.31]} rotation={[2.28, -0.41, 2.97]} scale={0.12} />
      <mesh geometry={nodes.Plane1029.geometry} material={materials.leaf} position={[2.56, 2.08, -11.28]} rotation={[1.22, 0.11, -0.62]} scale={0.16} />
      <mesh geometry={nodes.Plane1030.geometry} material={materials.leaf} position={[2.52, 2.24, -11.25]} rotation={[-2.95, -0.35, -0.18]} scale={0.18} />
      <mesh geometry={nodes.Plane1031.geometry} material={materials.leaf} position={[2.38, 2.23, -11.13]} rotation={[2.92, 1.35, -1.51]} scale={0.11} />
      <mesh geometry={nodes.Plane1032.geometry} material={materials.leaf} position={[2.53, 1.91, -11.16]} rotation={[0.74, -0.75, -0.54]} scale={0.19} />
      <mesh geometry={nodes.Plane1033.geometry} material={materials.leaf} position={[2.37, 2.25, -11.21]} rotation={[2.35, 0.17, -1.81]} scale={0.13} />
      <mesh geometry={nodes.Plane1034.geometry} material={materials.leaf} position={[2.46, 2.13, -10.97]} rotation={[-2.85, -1.1, -2.07]} scale={0.16} />
      <mesh geometry={nodes.Plane1035.geometry} material={materials.leaf} position={[2.61, 2.07, -10.9]} rotation={[3.04, -0.85, 2.81]} scale={0.1} />
      <mesh geometry={nodes.Plane1036.geometry} material={materials.leaf} position={[2.42, 2.01, -11.41]} rotation={[-2.28, 0.62, 0.88]} scale={0.1} />
      <mesh geometry={nodes.Plane1037.geometry} material={materials.leaf} position={[2.58, 1.98, -11.19]} rotation={[-1.96, 0.34, 0.22]} scale={0.13} />
      <mesh geometry={nodes.Plane1038.geometry} material={materials.leaf} position={[2.5, 1.92, -10.99]} rotation={[-1.49, 0.75, -0.63]} scale={0.13} />
      <mesh geometry={nodes.Plane1039.geometry} material={materials.leaf} position={[2.66, 2.07, -11.08]} rotation={[-0.93, 0.7, -1.24]} scale={0.18} />
      <mesh geometry={nodes.Plane1040.geometry} material={materials.leaf} position={[2.47, 2.09, -11.4]} rotation={[-2.1, -0.01, -2.61]} scale={0.16} />
      <mesh geometry={nodes.Plane1041.geometry} material={materials.leaf} position={[2.28, 2.16, -11.5]} rotation={[2.65, -0.47, -2.7]} scale={0.11} />
      <mesh geometry={nodes.Plane1042.geometry} material={materials.leaf} position={[2.29, 2.02, -11.46]} rotation={[-1.33, -0.53, 1.82]} scale={0.15} />
      <mesh geometry={nodes.Plane1043.geometry} material={materials.leaf} position={[2.58, 2.19, -11.21]} rotation={[0.02, -0.61, 0.6]} scale={0.18} />
      <mesh geometry={nodes.Plane1044.geometry} material={materials.leaf} position={[2.21, 2.14, -11.4]} rotation={[-2.12, 0.91, 1.73]} scale={0.14} />
      <mesh geometry={nodes.Plane1045.geometry} material={materials.leaf} position={[2.64, 1.97, -10.94]} rotation={[1.19, -0.14, 1.6]} scale={0.13} />
      <mesh geometry={nodes.Plane1046.geometry} material={materials.leaf} position={[2.25, 1.99, -11.31]} rotation={[-3.14, 0.54, 2.51]} scale={0.15} />
      <mesh geometry={nodes.Plane1047.geometry} material={materials.leaf} position={[2.41, 2.15, -11.02]} rotation={[3.01, -0.19, -3.11]} scale={0.1} />
      <mesh geometry={nodes.Plane1048.geometry} material={materials.leaf} position={[2.37, 2.25, -11.21]} rotation={[2.84, -0.33, -2.11]} scale={0.11} />
      <mesh geometry={nodes.Plane1049.geometry} material={materials.leaf} position={[2.21, 2.1, -11.37]} rotation={[-0.62, 0.62, 0.54]} scale={0.19} />
      <mesh geometry={nodes.Plane1050.geometry} material={materials.leaf} position={[2.63, 2.1, -11.16]} rotation={[-0.04, 0.67, 0.34]} scale={0.12} />
      <mesh geometry={nodes.Plane1051.geometry} material={materials.leaf} position={[2.41, 2.25, -11.13]} rotation={[3.08, -0.13, -1.15]} scale={0.15} />
      <mesh geometry={nodes.Plane1052.geometry} material={materials.leaf} position={[2.24, 2.16, -11.46]} rotation={[1.82, 0.74, -2.53]} scale={0.16} />
      <mesh geometry={nodes.Plane1053.geometry} material={materials.leaf} position={[2.66, 2.03, -10.98]} rotation={[-1.51, -0.15, -1.79]} scale={0.15} />
      <mesh geometry={nodes.Plane1054.geometry} material={materials.leaf} position={[2.23, 2.09, -11.28]} rotation={[-2.52, -0.21, 2.59]} scale={0.16} />
      <mesh geometry={nodes.Plane1055.geometry} material={materials.leaf} position={[2.65, 1.99, -11.01]} rotation={[-2.44, -0.58, -2.42]} scale={0.19} />
      <mesh geometry={nodes.Plane1056.geometry} material={materials.leaf} position={[2.3, 2.15, -11.17]} rotation={[2.5, -0.45, -2.03]} scale={0.18} />
      <mesh geometry={nodes.Plane1057.geometry} material={materials.leaf} position={[2.58, 2.21, -11.01]} rotation={[-0.4, -0.21, 0.11]} scale={0.17} />
      <mesh geometry={nodes.Plane1058.geometry} material={materials.leaf} position={[2.38, 2.27, -11.34]} rotation={[2.89, -0.44, -0.91]} scale={0.16} />
      <mesh geometry={nodes.Plane1059.geometry} material={materials.leaf} position={[2.55, 2.1, -10.91]} rotation={[0.78, 0.03, -0.59]} scale={0.13} />
      <mesh geometry={nodes.Plane1060.geometry} material={materials.leaf} position={[2.39, 2.19, -11.44]} rotation={[2.66, 0.69, -1.63]} scale={0.08} />
      <mesh geometry={nodes.Plane1061.geometry} material={materials.leaf} position={[2.34, 2.19, -11.46]} rotation={[1.72, -0.72, -2.52]} scale={0.19} />
      <mesh geometry={nodes.Plane1062.geometry} material={materials.leaf} position={[2.29, 2.21, -11.27]} rotation={[2.64, -0.7, 2.97]} scale={0.17} />
      <mesh geometry={nodes.Plane1063.geometry} material={materials.leaf} position={[2.64, 1.97, -10.94]} rotation={[2.49, -1.33, 0.76]} scale={0.11} />
      <mesh geometry={nodes.Plane1064.geometry} material={materials.leaf} position={[2.3, 2.11, -11.15]} rotation={[-2.78, -0.37, -2.2]} scale={0.12} />
      <mesh geometry={nodes.Plane1065.geometry} material={materials.leaf} position={[2.35, 1.95, -11.1]} rotation={[-3.01, 0.88, 2.7]} scale={0.11} />
      <mesh geometry={nodes.Plane1066.geometry} material={materials.leaf} position={[2.46, 2.27, -11.29]} rotation={[-2.67, 0.06, -1.04]} scale={0.17} />
      <mesh geometry={nodes.Plane1067.geometry} material={materials.leaf} position={[2.65, 2.16, -11.02]} rotation={[-0.71, -0.3, 1.1]} scale={0.09} />
      <mesh geometry={nodes.Plane1068.geometry} material={materials.leaf} position={[2.21, 2.14, -11.4]} rotation={[-2.84, -0.53, 2.62]} scale={0.18} />
      <mesh geometry={nodes.Plane1069.geometry} material={materials.leaf} position={[2.64, 2.15, -11.11]} rotation={[-0.73, -1.15, 1.39]} scale={0.18} />
      <mesh geometry={nodes.Plane1070.geometry} material={materials.leaf} position={[2.27, 2.05, -11.47]} rotation={[2.66, 0.9, 3]} scale={0.19} />
      <mesh geometry={nodes.Plane1071.geometry} material={materials.leaf} position={[2.64, 2.15, -10.97]} rotation={[-1.5, 1.36, -2.49]} scale={0.13} />
      <mesh geometry={nodes.Plane1072.geometry} material={materials.leaf} position={[2.34, 1.92, -11.33]} rotation={[-2.82, 1.21, 2.52]} scale={0.14} />
      <mesh geometry={nodes.Plane1073.geometry} material={materials.leaf} position={[2.45, 1.9, -11.24]} rotation={[2.83, 1.07, 2.16]} scale={0.12} />
      <mesh geometry={nodes.Plane1074.geometry} material={materials.leaf} position={[2.21, 2.11, -11.46]} rotation={[0.08, 0.33, 2.7]} scale={0.16} />
      <mesh geometry={nodes.Plane1075.geometry} material={materials.leaf} position={[2.34, 2.23, -11.41]} rotation={[-1.09, -0.02, 2.28]} scale={0.09} />
      <mesh geometry={nodes.Plane1076.geometry} material={materials.leaf} position={[2.45, 1.9, -11.24]} rotation={[-0.91, 1.48, -0.12]} scale={0.17} />
      <mesh geometry={nodes.Plane1077.geometry} material={materials.leaf} position={[2.61, 2.07, -10.9]} rotation={[0.79, 0.77, 1.68]} scale={0.09} />
      <mesh geometry={nodes.Plane1078.geometry} material={materials.leaf} position={[2.58, 2.22, -11.05]} rotation={[-2.57, -1.04, 2.75]} scale={0.15} />
      <mesh geometry={nodes.Plane1079.geometry} material={materials.leaf} position={[2.47, 2.09, -11.4]} rotation={[2.25, 0.42, -3.13]} scale={0.15} />
      <mesh geometry={nodes.Plane1080.geometry} material={materials.leaf} position={[2.24, 2.07, -11.48]} rotation={[-2.11, -0.51, -2.85]} scale={0.12} />
      <mesh geometry={nodes.Plane1081.geometry} material={materials.leaf} position={[2.39, 2.26, -11.36]} rotation={[-3.1, -0.9, -2.45]} scale={0.13} />
      <mesh geometry={nodes.Plane1082.geometry} material={materials.leaf} position={[2.25, 2.05, -11.48]} rotation={[0.41, 0.76, -0.77]} scale={0.15} />
      <mesh geometry={nodes.Plane1083.geometry} material={materials.leaf} position={[2.56, 2.08, -11.28]} rotation={[-2.93, 0.69, 0.52]} scale={0.19} />
      <mesh geometry={nodes.Plane1084.geometry} material={materials.leaf} position={[2.34, 2.23, -11.41]} rotation={[-0.87, 0.76, 1.88]} scale={0.12} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.water} position={[5.16, -0.11, -9.26]} rotation={[0, -0.5, 0]} scale={[2, 1.2, 6.43]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.leaf} position={[2.99, 0.64, -10.94]} rotation={[-0.07, 0, 0.02]} scale={0.06} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.004']} position={[3.9, 0.01, -11.18]} rotation={[-3.04, 0.11, -2.7]} scale={[-0.16, -0.09, -0.18]} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.004']} position={[3.87, -0.07, -10.85]} rotation={[0.84, 0.61, 2.58]} scale={[-0.08, -0.05, -0.09]} />
      <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.004']} position={[7.3, 0.06, -10.57]} rotation={[-1.97, -0.26, -0.85]} scale={[-0.24, -0.13, -0.27]} />
      <mesh geometry={nodes.Icosphere003.geometry} material={materials['Material.004']} position={[5.93, 0.31, -15.1]} rotation={[-2.14, -0.19, 1.07]} scale={[-0.36, -0.2, -0.41]} />
      <mesh geometry={nodes.Icosphere004.geometry} material={materials['Material.004']} position={[3.18, -0.09, -9.58]} rotation={[-3.12, 1.12, -1.63]} scale={[0.07, 0.09, 0.13]} />
      <mesh geometry={nodes.Icosphere005.geometry} material={materials['Material.004']} position={[6.54, -0.07, -9.11]} rotation={[2.88, 0.13, 2.88]} scale={[0.07, 0.09, 0.13]} />
      <mesh geometry={nodes.Icosphere006.geometry} material={materials['Material.004']} position={[6.49, -0.08, -8.84]} rotation={[-3.11, 1, -2.75]} scale={[0.04, 0.06, 0.09]} />
      <mesh geometry={nodes.Icosphere007.geometry} material={materials['Material.004']} position={[4.05, 0.11, -5.43]} rotation={[-2.87, 0.38, -2.84]} scale={[0.09, 0.11, 0.18]} />
      <mesh geometry={nodes.Icosphere008.geometry} material={materials['Material.004']} position={[3.9, 0.07, -5.18]} rotation={[2.9, 0.38, 2.1]} scale={[0.04, 0.06, 0.09]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.wood} position={[3.21, 0.09, -11.47]} rotation={[-Math.PI, 1.38, -Math.PI]} scale={0.36} />
      <mesh geometry={nodes.Plane003.geometry} material={materials.wood} position={[5.8, 0.31, -7.12]} rotation={[0, -0.74, 0]} scale={0.4} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.003']} scale={1.75}>
        <mesh geometry={nodes.Plane004_2.geometry} material={materials.leaf} position={[1.52, 0.21, -4.64]} rotation={[-0.93, 0.06, 1.55]} scale={0.03} />
        <mesh geometry={nodes.Plane004_3.geometry} material={materials.leaf} position={[1.55, 0.23, -6.72]} rotation={[1.52, -0.18, 1.8]} scale={0.03} />
        <mesh geometry={nodes.Plane004_4.geometry} material={materials.leaf} position={[1.87, 0.43, -6.98]} rotation={[-2.27, -0.56, -0.1]} scale={0.03} />
        <mesh geometry={nodes.Plane004_5.geometry} material={materials.leaf} position={[1.45, 0.54, -7.11]} rotation={[-0.28, -0.77, -0.29]} scale={0.03} />
        <mesh geometry={nodes.Plane004_6.geometry} material={materials.leaf} position={[3.41, 0.11, -4.56]} rotation={[-0.93, 0.16, 1.98]} scale={0.03} />
        <mesh geometry={nodes.Plane004_7.geometry} material={materials.leaf} position={[1.77, 0.26, -6.72]} rotation={[-2.2, 0.35, -2.64]} scale={0.03} />
        <mesh geometry={nodes.Plane004_8.geometry} material={materials.leaf} position={[1.57, 0.11, -6.21]} rotation={[-0.07, 0.58, -3.07]} scale={0.03} />
        <mesh geometry={nodes.Plane004_9.geometry} material={materials.leaf} position={[1.01, 0.12, -5.67]} rotation={[2.68, 0.23, 0.83]} scale={0.03} />
        <mesh geometry={nodes.Plane004_10.geometry} material={materials.leaf} position={[1.87, 0.43, -6.98]} rotation={[-1.68, -1.09, -0.36]} scale={0.03} />
        <mesh geometry={nodes.Plane004_11.geometry} material={materials.leaf} position={[2.98, 0.22, -3.77]} rotation={[3, 0.84, -2.4]} scale={0.03} />
        <mesh geometry={nodes.Plane004_12.geometry} material={materials.leaf} position={[1.18, 0.18, -6.65]} rotation={[1.94, 0.37, -2.39]} scale={0.03} />
        <mesh geometry={nodes.Plane004_13.geometry} material={materials.leaf} position={[2.93, -0.04, -4.19]} rotation={[1.53, -0.3, -1.03]} scale={0.03} />
        <mesh geometry={nodes.Plane004_14.geometry} material={materials.leaf} position={[3.43, 0.28, -3.9]} rotation={[0.3, -0.27, 0.32]} scale={0.03} />
        <mesh geometry={nodes.Plane004_15.geometry} material={materials.leaf} position={[1.48, 0.13, -6.35]} rotation={[-1.99, -0.64, -1.76]} scale={0.03} />
        <mesh geometry={nodes.Plane004_16.geometry} material={materials.leaf} position={[1.75, 0.22, -6.59]} rotation={[-1.12, 0.14, -2.74]} scale={0.03} />
        <mesh geometry={nodes.Plane004_17.geometry} material={materials.leaf} position={[3.66, 0.24, -3.72]} rotation={[1.76, 0.27, 1.8]} scale={0.03} />
        <mesh geometry={nodes.Plane004_18.geometry} material={materials.leaf} position={[3, 0.29, -3.16]} rotation={[-2.76, -0.43, -0.93]} scale={0.03} />
        <mesh geometry={nodes.Plane004_19.geometry} material={materials.leaf} position={[1.72, 0.18, -6.43]} rotation={[-0.5, -0.7, -1.17]} scale={0.03} />
        <mesh geometry={nodes.Plane004_20.geometry} material={materials.leaf} position={[2.46, -0.2, -6.43]} rotation={[0.38, 0.15, 1.41]} scale={0.03} />
        <mesh geometry={nodes.Plane004_21.geometry} material={materials.leaf} position={[1.72, 0.6, -7.17]} rotation={[-2.47, 0.31, 0.83]} scale={0.03} />
        <mesh geometry={nodes.Plane004_22.geometry} material={materials.leaf} position={[1.37, 0.16, -6.51]} rotation={[-2.5, -1.4, -1.14]} scale={0.03} />
        <mesh geometry={nodes.Plane004_23.geometry} material={materials.leaf} position={[1.45, 0.1, -5.82]} rotation={[1.88, -0.18, -1.39]} scale={0.03} />
        <mesh geometry={nodes.Plane004_24.geometry} material={materials.leaf} position={[2.61, 0.2, -2.51]} rotation={[-0.65, -1.01, -1.24]} scale={0.03} />
        <mesh geometry={nodes.Plane004_25.geometry} material={materials.leaf} position={[1.52, 0.09, -5.76]} rotation={[1.06, -0.61, 2.04]} scale={0.03} />
        <mesh geometry={nodes.Plane004_26.geometry} material={materials.leaf} position={[1.93, 0.13, -6.14]} rotation={[-2.31, -0.69, 1.53]} scale={0.03} />
        <mesh geometry={nodes.Plane004_27.geometry} material={materials.leaf} position={[1.48, 0.13, -6.35]} rotation={[-0.86, 0.64, 2.44]} scale={0.03} />
        <mesh geometry={nodes.Plane004_28.geometry} material={materials.leaf} position={[3.18, 0.27, -3.5]} rotation={[-3.12, 0.12, 2.44]} scale={0.03} />
        <mesh geometry={nodes.Plane004_29.geometry} material={materials.leaf} position={[2.39, -0.26, -6.07]} rotation={[-0.54, -1.06, 1.94]} scale={0.03} />
        <mesh geometry={nodes.Plane004_30.geometry} material={materials.leaf} position={[1.84, 0.15, -6.28]} rotation={[2.41, 1.22, -0.91]} scale={0.03} />
        <mesh geometry={nodes.Plane004_31.geometry} material={materials.leaf} position={[1.22, 0.12, -5.83]} rotation={[-1.24, -0.04, -1.37]} scale={0.03} />
        <mesh geometry={nodes.Plane004_32.geometry} material={materials.leaf} position={[1.76, 0.07, -5.75]} rotation={[2.24, 0.24, 2.23]} scale={0.03} />
        <mesh geometry={nodes.Plane004_33.geometry} material={materials.leaf} position={[1.39, 0.1, -6]} rotation={[-1.55, -1.25, 0.74]} scale={0.03} />
        <mesh geometry={nodes.Plane004_34.geometry} material={materials.leaf} position={[2.22, 0.29, -6.87]} rotation={[0.53, -0.35, -0.04]} scale={0.03} />
        <mesh geometry={nodes.Plane004_35.geometry} material={materials.leaf} position={[2.55, -0.09, -6.74]} rotation={[-0.97, 0.56, 1.25]} scale={0.03} />
        <mesh geometry={nodes.Plane004_36.geometry} material={materials.leaf} position={[1.48, 0.13, -6.35]} rotation={[-0.93, 0.5, -2.7]} scale={0.03} />
        <mesh geometry={nodes.Plane004_37.geometry} material={materials.leaf} position={[1.04, 0.14, -6.57]} rotation={[-2.21, 0.87, -1.72]} scale={0.03} />
        <mesh geometry={nodes.Plane004_38.geometry} material={materials.leaf} position={[1.56, 0.85, -7.36]} rotation={[-1.38, 0.54, -1.39]} scale={0.03} />
        <mesh geometry={nodes.Plane004_39.geometry} material={materials.leaf} position={[2.85, 0.26, -3.29]} rotation={[-2.85, 0.4, 2.06]} scale={0.03} />
        <mesh geometry={nodes.Plane004_40.geometry} material={materials.leaf} position={[1.43, 0.25, -6.82]} rotation={[2.66, -1.05, -2.15]} scale={0.03} />
        <mesh geometry={nodes.Plane004_41.geometry} material={materials.leaf} position={[1.28, 0.16, -5.07]} rotation={[1.66, 0.5, -1.1]} scale={0.03} />
        <mesh geometry={nodes.Plane004_42.geometry} material={materials.leaf} position={[2.09, -0.14, -5.68]} rotation={[0.56, 1.06, -0.46]} scale={0.03} />
        <mesh geometry={nodes.Plane004_43.geometry} material={materials.leaf} position={[2.69, 0.27, -2.91]} rotation={[-0.93, -0.54, -2.29]} scale={0.03} />
        <mesh geometry={nodes.Plane004_44.geometry} material={materials.leaf} position={[2.11, 0.41, -6.96]} rotation={[0.82, 0.1, 1.63]} scale={0.03} />
        <mesh geometry={nodes.Plane004_45.geometry} material={materials.leaf} position={[1.39, 0.1, -6]} rotation={[-2.73, 0.49, 0.11]} scale={0.03} />
        <mesh geometry={nodes.Plane004_46.geometry} material={materials.leaf} position={[1.41, 0.08, -5.37]} rotation={[-0.97, 0, 0.64]} scale={0.03} />
        <mesh geometry={nodes.Plane004_47.geometry} material={materials.leaf} position={[2.31, -0.31, -5.72]} rotation={[-0.32, 0.52, 1.78]} scale={0.03} />
        <mesh geometry={nodes.Plane004_48.geometry} material={materials.leaf} position={[1.72, 0.6, -7.17]} rotation={[-3.01, -0.1, 2.83]} scale={0.03} />
        <mesh geometry={nodes.Plane004_49.geometry} material={materials.leaf} position={[1.65, 0.78, -7.32]} rotation={[2.09, -0.66, -2.74]} scale={0.03} />
        <mesh geometry={nodes.Plane004_50.geometry} material={materials.leaf} position={[4.28, 0.21, -4.28]} rotation={[1.63, -1, -1.04]} scale={0.03} />
        <mesh geometry={nodes.Plane004_51.geometry} material={materials.leaf} position={[1.52, 0.19, -6.58]} rotation={[-0.42, 1.41, 1.36]} scale={0.03} />
        <mesh geometry={nodes.Plane004_52.geometry} material={materials.leaf} position={[1.19, 0.54, -7.1]} rotation={[2.57, 0.55, 2.81]} scale={0.03} />
        <mesh geometry={nodes.Plane004_53.geometry} material={materials.leaf} position={[1.76, 0.07, -5.75]} rotation={[-1.3, -0.99, 2.17]} scale={0.03} />
        <mesh geometry={nodes.Plane004_54.geometry} material={materials.leaf} position={[1.57, 0.06, -5.54]} rotation={[0.08, 0.45, 1.67]} scale={0.03} />
        <mesh geometry={nodes.Plane004_55.geometry} material={materials.leaf} position={[2.95, 0.15, -2.65]} rotation={[-2.57, 0.75, 0.83]} scale={0.03} />
        <mesh geometry={nodes.Plane004_56.geometry} material={materials.leaf} position={[2.11, 0.41, -6.96]} rotation={[-2.41, -1.06, -0.6]} scale={0.03} />
        <mesh geometry={nodes.Plane004_57.geometry} material={materials.leaf} position={[0.88, 0.2, -6.84]} rotation={[1.25, 0.42, -0.77]} scale={0.03} />
        <mesh geometry={nodes.Plane004_58.geometry} material={materials.leaf} position={[2.93, -0.04, -4.19]} rotation={[-2.32, 1.35, 2.64]} scale={0.03} />
        <mesh geometry={nodes.Plane004_59.geometry} material={materials.leaf} position={[3.4, 0.31, -4.36]} rotation={[1.83, 0.5, -2.49]} scale={0.03} />
        <mesh geometry={nodes.Plane004_60.geometry} material={materials.leaf} position={[1.48, 0.13, -6.35]} rotation={[1.9, -0.74, -0.74]} scale={0.03} />
        <mesh geometry={nodes.Plane004_61.geometry} material={materials.leaf} position={[1.3, 0.09, -6.22]} rotation={[0.28, 0.12, 0.61]} scale={0.03} />
        <mesh geometry={nodes.Plane004_62.geometry} material={materials.leaf} position={[3.36, 0.28, -3.45]} rotation={[-2.12, -0.07, -1.96]} scale={0.03} />
        <mesh geometry={nodes.Plane004_63.geometry} material={materials.leaf} position={[1.87, 0.21, -6.49]} rotation={[2.33, 0.26, -3.05]} scale={0.03} />
        <mesh geometry={nodes.Plane004_64.geometry} material={materials.leaf} position={[0.99, 0.08, -6.27]} rotation={[1.82, -0.95, -1.08]} scale={0.03} />
        <mesh geometry={nodes.Plane004_65.geometry} material={materials.leaf} position={[3.36, 0.28, -3.45]} rotation={[0.42, 1.16, 0.73]} scale={0.03} />
        <mesh geometry={nodes.Plane004_66.geometry} material={materials.leaf} position={[2.61, 0.2, -2.51]} rotation={[-1.27, 0.07, -1.6]} scale={0.03} />
        <mesh geometry={nodes.Plane004_67.geometry} material={materials.leaf} position={[3.96, 0.18, -3.88]} rotation={[2.1, 0.33, 2.09]} scale={0.03} />
        <mesh geometry={nodes.Plane004_68.geometry} material={materials.leaf} position={[2.56, 0.22, -3.12]} rotation={[-1.71, -0.81, 0.98]} scale={0.03} />
        <mesh geometry={nodes.Plane004_69.geometry} material={materials.leaf} position={[1.21, 0.14, -5.24]} rotation={[-0.69, 1.17, 1.5]} scale={0.03} />
        <mesh geometry={nodes.Plane004_70.geometry} material={materials.leaf} position={[3.68, 0.22, -3.63]} rotation={[-1.17, -0.04, -2.07]} scale={0.03} />
        <mesh geometry={nodes.Plane004_71.geometry} material={materials.leaf} position={[3.53, 0.18, -3.26]} rotation={[-1.73, 1.05, -1.92]} scale={0.03} />
        <mesh geometry={nodes.Plane004_72.geometry} material={materials.leaf} position={[3.7, 0.3, -4.36]} rotation={[-1.85, 0.52, -0.91]} scale={0.03} />
        <mesh geometry={nodes.Plane004_73.geometry} material={materials.leaf} position={[2.66, 0.01, -3.83]} rotation={[-2.63, 0.74, 1.65]} scale={0.03} />
        <mesh geometry={nodes.Plane004_74.geometry} material={materials.leaf} position={[4.27, 0.22, -4.81]} rotation={[-1.08, -0.51, 1.81]} scale={0.03} />
        <mesh geometry={nodes.Plane004_75.geometry} material={materials.leaf} position={[1.07, 0.1, -6.06]} rotation={[0.92, 0.54, 1.21]} scale={0.03} />
        <mesh geometry={nodes.Plane004_76.geometry} material={materials.leaf} position={[1.04, 0.14, -6.57]} rotation={[-2.24, -0.1, -1.1]} scale={0.03} />
        <mesh geometry={nodes.Plane004_77.geometry} material={materials.leaf} position={[2.98, 0.22, -3.77]} rotation={[-1.18, 0.04, -2.01]} scale={0.03} />
        <mesh geometry={nodes.Plane004_78.geometry} material={materials.leaf} position={[3.69, 0.24, -3.88]} rotation={[2.3, -0.1, 2.26]} scale={0.03} />
        <mesh geometry={nodes.Plane004_79.geometry} material={materials.leaf} position={[1.66, 0.11, -6.14]} rotation={[-1.72, -1.37, 0.83]} scale={0.03} />
        <mesh geometry={nodes.Plane004_80.geometry} material={materials.leaf} position={[2.15, -0.26, -5.43]} rotation={[0.89, -0.25, 0.6]} scale={0.03} />
        <mesh geometry={nodes.Plane004_81.geometry} material={materials.leaf} position={[3.45, 0.3, -4.07]} rotation={[-1.83, -0.82, -1.06]} scale={0.03} />
        <mesh geometry={nodes.Plane004_82.geometry} material={materials.leaf} position={[3.25, 0.3, -4]} rotation={[-1.09, -0.23, -2.45]} scale={0.03} />
        <mesh geometry={nodes.Plane004_83.geometry} material={materials.leaf} position={[1.89, 0.7, -7.31]} rotation={[-1.71, 0.96, -2.53]} scale={0.03} />
        <mesh geometry={nodes.Plane004_84.geometry} material={materials.leaf} position={[3, 0.29, -3.16]} rotation={[3.01, 1.55, 0.68]} scale={0.03} />
        <mesh geometry={nodes.Plane004_85.geometry} material={materials.leaf} position={[3.25, 0.3, -4]} rotation={[-2.55, -0.25, 0.08]} scale={0.03} />
        <mesh geometry={nodes.Plane004_86.geometry} material={materials.leaf} position={[1.6, 0.03, -5.37]} rotation={[-0.81, -1.16, -0.47]} scale={0.03} />
        <mesh geometry={nodes.Plane004_87.geometry} material={materials.leaf} position={[2.09, -0.14, -5.68]} rotation={[0.37, -0.61, 2.96]} scale={0.03} />
        <mesh geometry={nodes.Plane004_88.geometry} material={materials.leaf} position={[1.66, 0.11, -6.14]} rotation={[2.2, 0.27, 0.04]} scale={0.03} />
        <mesh geometry={nodes.Plane004_89.geometry} material={materials.leaf} position={[2.55, -0.09, -6.74]} rotation={[-1.61, -0.74, -1.21]} scale={0.03} />
        <mesh geometry={nodes.Plane004_90.geometry} material={materials.leaf} position={[1.48, 0.13, -6.35]} rotation={[0.37, -0.09, -2.82]} scale={0.03} />
        <mesh geometry={nodes.Plane004_91.geometry} material={materials.leaf} position={[1.52, 0.09, -5.76]} rotation={[2.5, -0.44, 1.75]} scale={0.03} />
        <mesh geometry={nodes.Plane004_92.geometry} material={materials.leaf} position={[3.84, 0.15, -3.53]} rotation={[-1.1, -0.2, 1.74]} scale={0.03} />
        <mesh geometry={nodes.Plane004_93.geometry} material={materials.leaf} position={[1.61, 0.35, -6.9]} rotation={[1.85, -0.36, 2.15]} scale={0.03} />
        <mesh geometry={nodes.Plane004_94.geometry} material={materials.leaf} position={[1.3, 0.09, -6.22]} rotation={[-1.63, -0.49, 1.78]} scale={0.03} />
        <mesh geometry={nodes.Plane004_95.geometry} material={materials.leaf} position={[2.31, -0.31, -5.72]} rotation={[-0.2, 0.39, 1.63]} scale={0.03} />
        <mesh geometry={nodes.Plane004_96.geometry} material={materials.leaf} position={[3.15, 0.23, -3.01]} rotation={[-2.05, 0.93, -0.79]} scale={0.03} />
        <mesh geometry={nodes.Plane004_97.geometry} material={materials.leaf} position={[3.25, 0.3, -4]} rotation={[-2.17, 0.06, -1.39]} scale={0.03} />
        <mesh geometry={nodes.Plane004_98.geometry} material={materials.leaf} position={[1.45, 0.1, -5.82]} rotation={[1.25, 0.95, -2.99]} scale={0.03} />
        <mesh geometry={nodes.Plane004_99.geometry} material={materials.leaf} position={[3.18, 0.12, -4.26]} rotation={[2.77, -0.2, -0.79]} scale={0.03} />
        <mesh geometry={nodes.Plane004_100.geometry} material={materials.leaf} position={[1.66, 0.11, -6.14]} rotation={[-0.5, -0.7, -0.58]} scale={0.03} />
        <mesh geometry={nodes.Plane004_101.geometry} material={materials.leaf} position={[4.89, 0.28, -4.37]} rotation={[-1.48, 0.69, 2.75]} scale={0.03} />
        <mesh geometry={nodes.Plane004_102.geometry} material={materials.leaf} position={[3.7, 0.3, -4.36]} rotation={[-0.83, 0.59, 3.12]} scale={0.03} />
        <mesh geometry={nodes.Plane004_103.geometry} material={materials.leaf} position={[3.4, -0.12, -4.78]} rotation={[-1.29, 1.01, -2.33]} scale={0.03} />
        <mesh geometry={nodes.Plane004_104.geometry} material={materials.leaf} position={[3.4, 0.31, -4.36]} rotation={[-2.24, 1.06, -0.68]} scale={0.03} />
        <mesh geometry={nodes.Plane004_105.geometry} material={materials.leaf} position={[1.21, 0.14, -5.24]} rotation={[-1.97, 0.27, 1.33]} scale={0.03} />
        <mesh geometry={nodes.Plane004_106.geometry} material={materials.leaf} position={[3.68, 0.22, -3.63]} rotation={[2.12, -1.13, -3.1]} scale={0.03} />
        <mesh geometry={nodes.Plane004_107.geometry} material={materials.leaf} position={[3.43, 0.28, -3.9]} rotation={[0.14, -1.48, -2.38]} scale={0.03} />
        <mesh geometry={nodes.Plane004_108.geometry} material={materials.leaf} position={[1.57, 0.06, -5.54]} rotation={[0.96, -0.59, 1.4]} scale={0.03} />
        <mesh geometry={nodes.Plane004_109.geometry} material={materials.leaf} position={[1.4, 0.21, -6.68]} rotation={[-2.76, -0.5, -1.37]} scale={0.03} />
        <mesh geometry={nodes.Plane004_110.geometry} material={materials.leaf} position={[1.93, 0.13, -6.14]} rotation={[-0.71, -0.45, -1.72]} scale={0.03} />
        <mesh geometry={nodes.Plane004_111.geometry} material={materials.leaf} position={[2.27, -0.08, -6.26]} rotation={[0.72, 0.51, 1.39]} scale={0.03} />
        <mesh geometry={nodes.Plane004_112.geometry} material={materials.leaf} position={[3.17, -0.09, -4.47]} rotation={[-2.38, 0.53, 1.33]} scale={0.03} />
        <mesh geometry={nodes.Plane004_113.geometry} material={materials.leaf} position={[2.01, 0.27, -6.67]} rotation={[-1, -0.83, 1.28]} scale={0.03} />
        <mesh geometry={nodes.Plane004_114.geometry} material={materials.leaf} position={[2.09, -0.14, -5.68]} rotation={[-0.19, 1.18, 1.69]} scale={0.03} />
        <mesh geometry={nodes.Plane004_115.geometry} material={materials.leaf} position={[3.25, 0.3, -4]} rotation={[2.2, 0.97, 2.85]} scale={0.03} />
        <mesh geometry={nodes.Plane004_116.geometry} material={materials.leaf} position={[2.39, -0.26, -6.07]} rotation={[3.1, -0.88, -1.03]} scale={0.03} />
        <mesh geometry={nodes.Plane004_117.geometry} material={materials.leaf} position={[1.48, 0.13, -6.35]} rotation={[0.98, 0.43, -0.8]} scale={0.03} />
        <mesh geometry={nodes.Plane004_118.geometry} material={materials.leaf} position={[3.17, -0.09, -4.47]} rotation={[0.44, 0.73, -0.2]} scale={0.03} />
        <mesh geometry={nodes.Plane004_119.geometry} material={materials.leaf} position={[1.21, 0.09, -6.28]} rotation={[-1.3, -0.61, -2.07]} scale={0.03} />
        <mesh geometry={nodes.Plane004_120.geometry} material={materials.leaf} position={[1.57, 0.06, -5.54]} rotation={[2.97, -0.48, 3.11]} scale={0.03} />
        <mesh geometry={nodes.Plane004_121.geometry} material={materials.leaf} position={[1.37, 0.16, -6.51]} rotation={[0.75, -0.92, -2.86]} scale={0.03} />
        <mesh geometry={nodes.Plane004_122.geometry} material={materials.leaf} position={[2.55, -0.09, -6.74]} rotation={[2.22, -1.02, 1.49]} scale={0.03} />
        <mesh geometry={nodes.Plane004_123.geometry} material={materials.leaf} position={[1.72, 0.1, -5.93]} rotation={[-0.63, -0.68, 1.56]} scale={0.03} />
        <mesh geometry={nodes.Plane004_124.geometry} material={materials.leaf} position={[0.99, 0.08, -6.27]} rotation={[1.69, 0.9, 0.65]} scale={0.03} />
        <mesh geometry={nodes.Plane004_125.geometry} material={materials.leaf} position={[3.36, 0.28, -3.45]} rotation={[-1.98, 0.61, 1.59]} scale={0.03} />
        <mesh geometry={nodes.Plane004_126.geometry} material={materials.leaf} position={[3.7, 0.3, -4.36]} rotation={[2.05, -0.98, -3.05]} scale={0.03} />
        <mesh geometry={nodes.Plane004_127.geometry} material={materials.leaf} position={[2.66, 0.01, -3.83]} rotation={[-0.19, -1.24, -2.55]} scale={0.03} />
        <mesh geometry={nodes.Plane004_128.geometry} material={materials.leaf} position={[1.89, 0.7, -7.31]} rotation={[-1.46, 1.47, 2.67]} scale={0.03} />
        <mesh geometry={nodes.Plane004_129.geometry} material={materials.leaf} position={[1.72, 0.1, -5.93]} rotation={[-1.08, 0.91, -1.25]} scale={0.03} />
        <mesh geometry={nodes.Plane004_130.geometry} material={materials.leaf} position={[4.31, 0.2, -4.18]} rotation={[-2.78, 0.26, -1.03]} scale={0.03} />
        <mesh geometry={nodes.Plane004_131.geometry} material={materials.leaf} position={[2.39, -0.26, -6.07]} rotation={[-1.04, -0.12, -1.24]} scale={0.03} />
        <mesh geometry={nodes.Plane004_132.geometry} material={materials.leaf} position={[2.35, 0.02, -6.63]} rotation={[-1.57, 1.3, -1.62]} scale={0.03} />
        <mesh geometry={nodes.Plane004_133.geometry} material={materials.leaf} position={[1.87, 0.43, -6.98]} rotation={[-2.46, 0.41, 0.57]} scale={0.03} />
        <mesh geometry={nodes.Plane004_134.geometry} material={materials.leaf} position={[2.56, 0.22, -3.12]} rotation={[-1.03, -0.42, 1.19]} scale={0.03} />
        <mesh geometry={nodes.Plane004_135.geometry} material={materials.leaf} position={[2.62, 0.13, -3.44]} rotation={[-3.02, -0.95, 2.57]} scale={0.03} />
        <mesh geometry={nodes.Plane004_136.geometry} material={materials.leaf} position={[3.25, 0.3, -4]} rotation={[-0.1, -0.98, 2.01]} scale={0.03} />
        <mesh geometry={nodes.Plane004_137.geometry} material={materials.leaf} position={[1.45, 0.1, -5.82]} rotation={[2.47, -0.77, 1.72]} scale={0.03} />
        <mesh geometry={nodes.Plane004_138.geometry} material={materials.leaf} position={[1.01, 0.12, -5.67]} rotation={[2.68, -1.13, -2.39]} scale={0.03} />
        <mesh geometry={nodes.Plane004_139.geometry} material={materials.leaf} position={[1.3, 0.09, -6.22]} rotation={[1.6, -0.79, -0.55]} scale={0.03} />
        <mesh geometry={nodes.Plane004_140.geometry} material={materials.leaf} position={[2.31, -0.31, -5.72]} rotation={[2.1, -1.44, 2.04]} scale={0.03} />
        <mesh geometry={nodes.Plane004_141.geometry} material={materials.leaf} position={[1.39, 0.1, -6]} rotation={[1.82, -0.92, 3.13]} scale={0.03} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/type.glb')
