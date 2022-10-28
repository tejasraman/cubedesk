export enum MatchConst {
	// Sockets & Rooms
	PLAYERS_ROOM_PREFIX = 'match_players=',
	SPECTATORS_ROOM_PREFIX = 'match_spectators=',
	REMATCH_ROOM_PREFIX = 'rematch_players=',
	LOBBY_ROOM_PREFIX = 'match_lobby=',
	SPECTATE_LINK_CODE_PREFIX = 'spec_',
	MATCH_ID_PREFIX = 'match_',

	// Match Config
	REMATCH_TIMEOUT_SEC = 60,
	SECONDS_TO_RETURN_AFTER_LEAVING = 30,
	PLAYERS_LEAVE_END_MATCH_GRACE_PERIOD_SEC = 15,
	SEND_ROOM_UPDATE_INTERVAL_MS = 3000,
	MAX_CHAT_MESSAGE_LENGTH = 250,

	// Elimination
	ELIMINATION_START_TIME_SECONDS = 30,
	ELIMINATION_CHANGE_RATE_PERCENT = 5,

	// Head to Head
	HEAD_TO_HEAD_FIRST_TO_COUNT = 5,
}
