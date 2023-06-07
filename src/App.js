import { useWindowHeight, useWindowWidth } from "@react-hook/window-size"
import "react-d3-treemap/dist/react.d3.treemap.css";
import TreeMap from "react-d3-treemap";
import myData from "./rs.json"

// const myData = {
//   "name": "analytics",
//   "color": "#12939A",
//   "children": [
//     {
//       "name": "cluster",
//       "children": [
//         { "name": "AgglomerativeCluster", "color": "#12939A", "value": 3938 },
//         { "name": "CommunityStructure", "color": "#12939A", "value": 3812 },
//         { "name": "HierarchicalCluster", "color": "#12939A", "value": 6714 },
//         { "name": "MergeEdge", "color": "#12939A", "value": 743 }
//       ]
//     },
//     {
//       "name": "graph",
//       "children": [
//         { "name": "BetweennessCentrality", "color": "#12939A", "value": 3534 },
//         { "name": "LinkDistance", "color": "#12939A", "value": 5731 },
//         { "name": "MaxFlowMinCut", "color": "#12939A", "value": 7840 },
//         { "name": "ShortestPaths", "color": "#12939A", "value": 5914 },
//         { "name": "SpanningTree", "color": "#12939A", "value": 3416 }
//       ]
//     },
//     {
//       "name": "optimization",
//       "children": [
//         { "name": "AspectRatioBanker", "color": "#12939A", "value": 7074 }
//       ]
//     }
//   ]
// }

function App() {
  var height = useWindowHeight()
  var width = useWindowWidth()
  return (
    <>
      <div>
        <center>
          <h1>Авторы инфографики: Двойнин А.А., Харитонов А.А.</h1>
        </center>
        <hr />
        Инструкция по использованию:<br />
        В зависимости от выбора набора группировки будет разный порядок выборки. <br />
        В конечном итоге вы получаете количество мест по заданной группировке<br />
        Если содержимое текста в ячейке отображается неполностью - наведитесь курсором на ячейку и отобразит полное содержимое в модальном сообщении<br />
        Источник информации взят атомарно из каждого вуза свой отдельный сайт<br />
        <hr />
      </div>
      <TreeMap
        data={myData}
        levelsToDisplay={1}
        width={width * 0.95}
        height={height * 2}
        valueUnit="мест"
        paddingOuter={0}
      />
    </>
  );
}

export default App;
