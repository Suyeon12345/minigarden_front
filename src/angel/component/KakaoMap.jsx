import React, {useEffect} from 'react';

const { kakao } = window
const Test = () => {
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(37.456004, 126.895982),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id='myMap' style={{
            width: '500px',
            height: '500px'
        }}></div>
    );
}
export default Test;


