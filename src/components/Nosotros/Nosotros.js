import React, { useState, useEffect } from 'react';
import { CarouselNav } from '../Carousel/Carousel';
import { ColorRing } from 'react-loader-spinner';

export const Nosotros = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    
    return (
        <div>
            
            {
                loading
                    ?   <div>
                        <br/>
                        <h2>Nosotros</h2>
                        <ColorRing height={250} width={250} 
                        />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        </div>
                    : <div className='nos'>
                        <CarouselNav />
                    </div>
            }
        </div>
    );
};

