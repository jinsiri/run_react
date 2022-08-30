function Basic({ color, name, isSpecial }) { // 구조분해할당, 기본값 지정
    return (
        <>
            {isSpecial && <b>Special</b>}
            {/* 단축평가 논리 계산법 */}
            {name}
            <p style={{ color: `${color}` }}>name is {name}</p>
        </>
    );
}

Basic.defaultProps = {
    color: 'purple'
}

export default Basic;