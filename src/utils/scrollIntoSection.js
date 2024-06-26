export function scrollIntoSection(sectionId, behavior) {
	const section = document.getElementById(sectionId);
	section.scrollIntoView({ behavior: behavior });
}
