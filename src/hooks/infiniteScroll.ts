import { useCallback, useEffect, useRef } from 'react';

export default function useIntersection(
	fetchNextPage: () => void,
	options?: IntersectionObserverInit,
) {
	const ref = useRef<HTMLDivElement>(null);

	const handleIntersection: IntersectionObserverCallback = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					fetchNextPage();
				}
			});
		},
		[fetchNextPage],
	);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(handleIntersection, options);
		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, options, handleIntersection]);

	return ref;
}
