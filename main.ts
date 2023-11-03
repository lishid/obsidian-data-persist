import { Notice, Plugin } from 'obsidian';

export default class DataPersist extends Plugin {
	async onload() {
		try {
			let result = await navigator.storage.persist();
			if (result) {
				new Notice('Persist applied successfully');
			}
			else {
				new Notice('Persist failed to apply');
			}
		}
		catch (e) {
			new Notice('Persist failed to apply. ' + e.message);
		}
	}

	onunload() {

	}
}
