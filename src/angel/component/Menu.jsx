import React from 'react';

function Menu() {
    return (
        <div>
            <div style={{ fontSize: '1rem' }}>
                <h5>프로그램 현황</h5>
                <li className="list-group" >
                    <li href="#" class="list-group-item list-group-item-action">프로그램 현황</li>
                    <li href="#" class="list-group-item list-group-item-action">프로그램 정보</li>
                    <li href="#" class="list-group-item list-group-item-action">프로그램 일정</li>
                </li>
            </div>
        </div>
    );
}

export default Menu;