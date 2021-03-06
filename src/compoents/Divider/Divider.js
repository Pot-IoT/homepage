import React from 'react';

export const Divider = ({
    text = '',
    color = '#e7cfcf',
    lineColor = '#e7cfcf',
    margin = '10px'
}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', }}>
            <div style={{flexGrow: 1, borderBottom: `1px solid ${lineColor}`}}></div>
            <div style={{margin: `0 ${margin}`, color: color, }}>{text}</div>
            <div style={{flexGrow: 1, borderBottom: `1px solid ${lineColor}`}}></div>
        </div>
    )
}