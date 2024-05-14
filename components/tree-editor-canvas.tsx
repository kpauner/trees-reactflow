"use client";

import React, { useCallback } from "react";
import ReactFlow, { addEdge, useEdgesState, useNodesState } from "reactflow";

import "reactflow/dist/style.css";

type EditorNodeType = {
  id: string;
  type: "custom";
  data: { name: string; job: string; emoji: string };
  position: { x: number; y: number };
};

// const initialEdges: { id: string; source: string; target: string }[] = []
import CustomNode from "./custom-node";

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: EditorNodeType[] = [
  {
    id: "1",
    type: "custom",
    data: { name: "Jane Doe", job: "CEO", emoji: "😎" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "Tyler Weary", job: "Designer", emoji: "🤓" },

    position: { x: -200, y: 200 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
    position: { x: 200, y: 200 },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

type TreeEditorCanvasProps = {};

export default function TreeEditorCanvas({}: TreeEditorCanvasProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}
