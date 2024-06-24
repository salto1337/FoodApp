export function scrollIntoSection(sectionId, behavior) {
	const section = document.getElementById(sectionId);
	return section.scrollIntoView({ behavior: behavior });
}
