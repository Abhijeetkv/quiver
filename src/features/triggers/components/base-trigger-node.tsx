"use client";

import { type NodeProps, Position, useReactFlow } from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { memo, type ReactNode, useCallback } from "react";
import { BaseNode, BaseNodeContent } from "../../../components/react-flow/base-node";
import { BaseHandle } from "../../../components/react-flow/base-handle";
import { WorkflowNode } from "../../../components/workflow-node";
import { BaseExecutionNode } from "@/features/executions/components/base-execution-node";
import {type  NodeStatus, NodeStatusIndicator } from "@/components/react-flow/node-status-indicator";

interface BaseTriggerNodeProps extends NodeProps {
  icon: LucideIcon | string;
  name: string;
  description?: string;
  children?: ReactNode;
  status?: NodeStatus;
  onSettings?: () => void;
  onDoubleClick?: () => void;
}


export const BaseTriggerNode =  memo(
    ({
        id,
        icon: Icon,
        name,
        description,
        status= "initial",
        children,
        onSettings,
        onDoubleClick,
    }: BaseTriggerNodeProps) => {
        // Implement delete functionality
         const {setNodes, setEdges} = useReactFlow()
        const handleDelete = () => {
            setNodes((currentNodes) => {
                const updateNodes = currentNodes.filter((node) => node.id !== id)
                return updateNodes
            })

            setEdges((currentEdges) => {
                const updateEdges = currentEdges.filter((edge) => edge.source !== id && edge.target !== id)
                return updateEdges
            })
        }
        return (
    <WorkflowNode
      name={name}
      description={description}
      onSettings={onSettings}
      onDelete={handleDelete}
      >
        {/* TODO: wrap within nodestatusindicator */}
       <NodeStatusIndicator
       status={status}
       variant="border"
       >
        <BaseNode status={status} onDoubleClick={onDoubleClick}
       className="rounded-l-2xl relative group"
       >
            <BaseNodeContent>
                {typeof Icon === "string" ? (
                    <Image
                        src={Icon}
                        alt={`${name} icon`}
                        width={16}
                        height={16}
                    />
                ) : (
                    <Icon className="size-4 text-muted-foreground" />
                )}
                {children}
                <BaseHandle
                    id="source-1"
                    type="source"
                    position={Position.Right}
                />
            </BaseNodeContent>
       </BaseNode>
       </NodeStatusIndicator>
    </WorkflowNode>
        )
    }
)

BaseTriggerNode.displayName = "BaseTriggerNode";