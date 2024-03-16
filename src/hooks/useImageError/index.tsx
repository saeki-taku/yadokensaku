import { useState, useEffect } from "react";

/**
 * useImageErrorHandling - リンク切れ画像の判定
 */
export function useImageErrorHandling() {
	const [hasError, setHasError] = useState(false);

	// console.log("hasError", hasError);

	const handleImageError = () => {
		setHasError(true);
	};

	return { hasError, handleImageError };
}
