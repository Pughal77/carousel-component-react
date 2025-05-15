import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { styles } from './styles';

interface CarouselProps {
    componentList: React.ComponentType[];
}

const Carousel: React.FC<CarouselProps> = ({ componentList }) => {
    return (
        <CarouselProvider 
            naturalSlideWidth={window.innerWidth} 
            naturalSlideHeight={window.innerHeight} 
            totalSlides={componentList.length}
        >
            <div>
                <Slider>
                    {componentList.map((Component, index) => (
                        <Slide key={index} index={index}>
                            <Component />
                        </Slide>
                    ))}
                </Slider>
            </div>
            <div style={styles.navigationButtons}>
                <ButtonBack style={styles.button}>Back</ButtonBack>
                <ButtonNext style={styles.button}>Next</ButtonNext>
            </div>
        </CarouselProvider>
    );
};

export default Carousel;
