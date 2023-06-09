import { useState } from "react";
import { Launcher } from "./lib";
import "./lib/styles";

function App() {
	const [messageList, setMessageList] = useState([]);
	const _onMessageWasSent = (message) => {
		setMessageList([...messageList, message]);
	};
	return (
		<>
			<div>
				<Launcher
					agentProfile={{
						teamName: "react-chat-window",
						imageUrl:
							"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
					}}
					onMessageWasSent={_onMessageWasSent}
					messageList={messageList}
					showEmoji
				/>
			</div>
		</>
	);
}

export default App;
