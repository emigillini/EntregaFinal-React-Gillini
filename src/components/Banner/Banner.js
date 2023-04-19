import "./Banner.scss" 
import React, { useState } from 'react';

export const Banner = ({ couponCode, discountAmount }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="Banner">
      <p >
        ¡Obtén un {discountAmount}% de descuento usando el código de cupón{' '}
        <strong>{couponCode}</strong>!
      </p>
      <button className="btn btn-danger" onClick={handleBannerClose}>Cerrar</button>
    </div>
  );
};


