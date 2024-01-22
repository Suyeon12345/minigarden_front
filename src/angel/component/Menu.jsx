import React from 'react';
import styles from "../../angel/css/Angel.css";

function Menu() {
    return (
        <div>
            <div className={styles.box2}>
                <div>
                    <h5>프로그램 현황</h5>
                </div>
                <li className="list-group" style={{ fontSize: '1rem' }}>
                    <li href="#" class="list-group-item list-group-item-action">프로그램 현황</li>
                    <li href="#" class="list-group-item list-group-item-action">프로그램 정보</li>
                    <li href="#" class="list-group-item list-group-item-action">프로그램 일정</li>
                </li>
            </div>
        </div>
    );
}

export default Menu;