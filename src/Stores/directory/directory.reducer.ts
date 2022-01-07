import { SECTIONS } from 'Components/directory/directory.data';

interface DirectoryItem {
	title: string;

	imageUrl: string;

	size?: string | undefined;

	id: number;

	linkUrl: string;
}

export interface DirectoryState {
	sections: DirectoryItem[];
}

const INITIAL_STATE = { sections: [...SECTIONS] };

// eslint-disable-next-line import/prefer-default-export
export const directoryReducer = (
	state = INITIAL_STATE,
	action: { type: string }
): DirectoryState => {
	switch (action.type) {
		default:
			return state;
	}
};
