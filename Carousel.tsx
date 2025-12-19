import { useState, useRef, useLayoutEffect } from 'react';


const Carousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState(1);


    useLayoutEffect(()=> {
        const containerWidth = containerRef.current ?.offsetWidth || 0;
        const cardWidth = 296;
        const spacing = 16;

        const totalCardSpace = cardWidth + spacing;
        const itmes = Math.floor(containerWidth/totalCardSpace);
        setVisibleItems(itmes);
    }, []);

    return(
        <div ref={containerRef} style={{width: '100%'}}>
            {/*Render Visible number of cards */}
        </div>
    )
}

export default Carousel;