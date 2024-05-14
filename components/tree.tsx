"use client";

import React from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

// const initialNodes: EditorNodeType[] = []
// const initialEdges: { id: string; source: string; target: string }[] = []

type TreeProps = {};

export default function Tree({}: TreeProps) {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "potato" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}
