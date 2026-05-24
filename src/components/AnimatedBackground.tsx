import React from 'react';
import DotField from './DotField';

const AnimatedBackground = React.memo(() => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="aurora-container">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
        <div className="aurora-bottom-mask"></div>
      </div>
      
      {/* Optional: we can keep DotField on top of the Aurora blobs if desired */}
      <DotField />
    </div>
  );
});

export default AnimatedBackground;
