import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PostManipulation from "./PostManipulation/PostManipulation";

export default function NewStoryPage() {
	const [title, setTitle] = useState("");
	const [coverUrl, setCoverUrl] = useState("");
	const [content, setContent] = useState("");
	const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
	const history = useHistory();

	function onPostSaveButtonClick() {
		axios
			.post("http://localhost:5001/posts", {
				title,
				coverUrl,
				content,
			})
			.then(() => history.push("/"));
	}

	return (
		<PostManipulation
			title={title}
			onTitleChange={(newTitle) => setTitle(newTitle)}
			coverUrl={coverUrl}
			onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
			content={content}
			onContentChange={(newContent) => setContent(newContent)}
			onPostSaveButtonClick={onPostSaveButtonClick}
			isSaveButtonDisabled={isSaveButtonDisabled}
		/>
	);
}
