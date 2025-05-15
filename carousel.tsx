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
// Components in componentList should ideally not have any props. Use a wrapper component to pass props if you have to (sort of like currying when it comes to lambda functions)
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
                            {/* Render the component here */}
                            {/* Take note of the div styling here. If this is not desirable can always overide the style with your own specified in your component */}
                            <div style={styles.slideContent}>
                                <Component />
                            </div>
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
