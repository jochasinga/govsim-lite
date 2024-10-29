import React, { useCallback, useState, useMemo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import SliderNode from './SliderNode';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
  {
    id: '4',
    type: 'slider',
    position: { x: 0, y: 300 },
    data: { label: 'special', value: 10 },
  },
];

const edgeStyle = { strokeWidth: '2px' };

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: edgeStyle },
  { id: 'e2-3', source: '2', target: '3', style: edgeStyle },
  { id: 'e3-4', source: '3', target: '4', style: edgeStyle },
];

export default function App() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState([]);

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes],
  // );

  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges],
  // );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const rfStyle = {
    backgroundColor: '#B8CEFF',
  };

  const nodeTypes = useMemo(() => ({ slider:  SliderNode }), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        colorMode="light"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
      >
        {/* <Controls />
        <MiniMap /> */}
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}