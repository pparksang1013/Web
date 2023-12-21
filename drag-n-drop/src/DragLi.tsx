interface IBoxItem {
    boxItem: number[];
}

function DragLi({ boxItem }: IBoxItem) {
    const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
        const target = e.target as HTMLElement;

        e.dataTransfer.setData("text", target.innerText);
    };

    const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
    };

    return (
        <>
            {boxItem.map((item, i) => {
                return (
                    <li key={i} draggable="true" onDragStart={handleDragStart} onDragOver={handleDragOver}>
                        {item}
                    </li>
                );
            })}
        </>
    );
}

export default DragLi;
