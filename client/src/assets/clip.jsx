import React from 'react'

const ClipSvg = ({ width, height, color }) => {
    return (
        <svg
            fill={color}
            width={width}
            height={height}
            viewBox="-0.52 0 15.07 15.07"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M3,15.07A4,4,0,0,1,.15,13.89a.5.5,0,0,1,0-.71.5.5,0,0,1,.7,0,3,3,0,0,0,4.3,0l7-7a3,3,0,0,0,0-4.29,3.11,3.11,0,0,0-4.3,0L2.1,7.64A1.27,1.27,0,1,0,3.9,9.43L9.65,3.68a.5.5,0,0,1,.7,0,.5.5,0,0,1,0,.71L4.6,10.14a2.31,2.31,0,0,1-3.2,0,2.26,2.26,0,0,1,0-3.21L7.15,1.18A4,4,0,0,1,14,4a4,4,0,0,1-1.19,2.85l-7,7A4,4,0,0,1,3,15.07Z" />
                </g>
            </g>
        </svg>
    )
}

export default ClipSvg