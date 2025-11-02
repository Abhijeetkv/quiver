import { NodeProps } from "@xyflow/react";
import { memo, useState } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointerIcon } from "lucide-react";
import { ManualTriggerDialog } from "./dialog";

export const ManualTriggerNode = memo((props: NodeProps) => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const NodeStatus = "initial"

    const handleOpenSettings = () => {
            setDialogOpen(true);
        };

    return (
        <>
        <ManualTriggerDialog open={dialogOpen} onOpenChange={setDialogOpen} />    
        <BaseTriggerNode
            {...props}
            icon={MousePointerIcon}
            name="Execute workflow"
            status = {NodeStatus}
            onSettings={handleOpenSettings}
            onDoubleClick={handleOpenSettings}
        />
        </>
    )
})