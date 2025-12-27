
'use client';

import { useState, useEffect, useRef } from 'react';

export function useTypewriter(targetText: string, deleteSpeed = 50, typeSpeed = 70) {
  const [displayText, setDisplayText] = useState(targetText);
  const previousTextRef = useRef(targetText);

  useEffect(() => {
    const previousText = previousTextRef.current;
    
    if (previousText === targetText) {
      return;
    }

    let i = previousText.length;
    let newText = previousText;

    const deleteAnimation = () => {
      if (i > 0) {
        newText = newText.slice(0, -1);
        // Special handling for Neup.Product -> Neup.
        const prefix = "Neup.";
        if (targetText.startsWith(prefix) && previousText.startsWith(prefix) && newText.length < prefix.length) {
            newText = prefix;
            i = 0; // Stop deletion
        } else if (targetText === 'Neup Group' && newText.length === 0) {
            i = 0; // Stop deletion if we are going back to Neup Group
        }
        setDisplayText(newText);
        i--;
        setTimeout(deleteAnimation, deleteSpeed);
      } else {
        typeAnimation();
      }
    };

    const typeAnimation = () => {
        const finalTarget = targetText === 'Neup Group' ? 'Neup Group' : (targetText === 'NeupID' ? 'NeupID' : `.${targetText.split('.').pop()}`);
        const base = targetText === 'Neup Group' ? '' : 'Neup';
        let currentTyped = '';

        if(newText.startsWith('Neup.')){
            currentTyped = 'Neup.';
        } else if (targetText !== 'Neup Group') {
            currentTyped = 'Neup';
        }


        let j = currentTyped.length;

        const type = () => {
            if (j < targetText.length) {
                 setDisplayText(targetText.slice(0, j + 1));
                 j++;
                 setTimeout(type, typeSpeed);
            } else {
                previousTextRef.current = targetText;
            }
        };
        type();
    };

    deleteAnimation();

    return () => {
      // Cleanup timeouts if component unmounts mid-animation
    };

  }, [targetText, deleteSpeed, typeSpeed]);

  return displayText;
}

