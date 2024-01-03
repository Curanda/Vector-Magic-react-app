import React, { useEffect, useRef } from "react";

function Canvas({ firstVector, secondVector, result }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;

        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo((firstVector[0]) * 10, (-firstVector[1]) * 10);
        ctx.lineTo((firstVector[0]) * 10 + 2, (-firstVector[1]) * 10);
        ctx.lineTo((firstVector[0]) * 10 + 1, (-firstVector[1]) * 10 + 1);
        ctx.lineTo((firstVector[0]) * 10, (-firstVector[1]) * 10);
        ctx.strokeStyle = "red";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo((secondVector[0]) * 10, (-secondVector[1]) * 10);
        ctx.lineTo((secondVector[0]) * 10 + 2, (-secondVector[1]) * 10);
        ctx.lineTo((secondVector[0]) * 10 + 1, (-secondVector[1]) * 10 + 1);
        ctx.lineTo((secondVector[0]) * 10, (-secondVector[1]) * 10);
        ctx.strokeStyle = "blue";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo((result[0]) * 10, (-result[1]) * 10);
        ctx.lineTo((result[0]) * 10 + 2, (-result[1]) * 10);
        ctx.lineTo((result[0]) * 10 + 1, (-result[1]) * 10 + 1);
        ctx.lineTo((result[0]) * 10, (-result[1]) * 10);
        ctx.strokeStyle = "yellow";
        ctx.stroke();

        ctx.restore();
    }, [firstVector, secondVector, result]);

    return <canvas ref={canvasRef} width={200} height={200} />;
}

export default Canvas;
