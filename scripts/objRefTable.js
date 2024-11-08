const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Arr,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Function,
		C3.Plugins.LocalStorage,
		C3.Plugins.advert,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Pin,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Behaviors.Sin,
		C3.Behaviors.solid,
		C3.Plugins.Particles,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Acts.SetVectorX,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Platform.Acts.SetGravity,
		C3.Behaviors.Platform.Exps.Gravity,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.advert.Cnds.IsInterstitialLoaded,
		C3.Plugins.advert.Acts.ShowInterstitial,
		C3.Plugins.advert.Acts.CreateBanner,
		C3.Plugins.advert.Cnds.IsBannerLoaded,
		C3.Plugins.advert.Acts.ShowBanner,
		C3.Plugins.Function.Cnds.OnFunction,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.Function.Acts.CallFunction,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Arr.Acts.JSONLoad
	];
};
self.C3_JsPropNameTable = [
	{Array: 0},
	{Audio: 0},
	{Browser: 0},
	{Function: 0},
	{LocalStorage: 0},
	{MobileAdvert: 0},
	{Touch: 0},
	{idcharacter: 0},
	{Item_PriceText: 0},
	{Pin: 0},
	{GameOver_CoinsText: 0},
	{GameOver_ScoreText: 0},
	{GameOver_RecordText: 0},
	{HUD_CoinsDisplay: 0},
	{HUD_ScoreDisplay: 0},
	{Enemy_Aircraft: 0},
	{Enemy_Rocket: 0},
	{Platform: 0},
	{Player_Character: 0},
	{MainMenu_Button: 0},
	{SOUND: 0},
	{StartGame_Button: 0},
	{Back_Button: 0},
	{Store_MenuButton: 0},
	{Shop_Button: 0},
	{GameScene_Background: 0},
	{Main_Background: 0},
	{Game_Coin: 0},
	{GameOver_CoinIcon: 0},
	{Sine: 0},
	{Sine2: 0},
	{Sky_Cloud: 0},
	{GameOver_Screen: 0},
	{GameOver_HighScore: 0},
	{FinalScore_Display: 0},
	{GameOver_TitleText: 0},
	{HUD_CoinCounter: 0},
	{Game_Logo: 0},
	{Solid: 0},
	{Game_Platform: 0},
	{HUD_AlternateCoin: 0},
	{Collectible_Object: 0},
	{Left_Control: 0},
	{Effect_Particles: 0},
	{Right_Control: 0},
	{ctd_ads: 0},
	{time_enemy: 0},
	{level: 0},
	{if_gameover: 0},
	{time_game: 0},
	{coin: 0},
	{is_play: 0},
	{Interstitial: 0},
	{Banner: 0},
	{idCharacterSelected: 0},
	{audioGame: 0},
	{record: 0}
];

self.InstanceType = {
	Array: class extends self.IArrayInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Function: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	MobileAdvert: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Item_PriceText: class extends self.ITextInstance {},
	GameOver_CoinsText: class extends self.ISpriteFontInstance {},
	GameOver_ScoreText: class extends self.ISpriteFontInstance {},
	GameOver_RecordText: class extends self.ISpriteFontInstance {},
	HUD_CoinsDisplay: class extends self.ISpriteFontInstance {},
	HUD_ScoreDisplay: class extends self.ISpriteFontInstance {},
	Enemy_Aircraft: class extends self.ISpriteInstance {},
	Enemy_Rocket: class extends self.ISpriteInstance {},
	Player_Character: class extends self.ISpriteInstance {},
	MainMenu_Button: class extends self.ISpriteInstance {},
	SOUND: class extends self.ISpriteInstance {},
	StartGame_Button: class extends self.ISpriteInstance {},
	Back_Button: class extends self.ISpriteInstance {},
	Store_MenuButton: class extends self.ISpriteInstance {},
	Shop_Button: class extends self.ISpriteInstance {},
	GameScene_Background: class extends self.ITiledBackgroundInstance {},
	Main_Background: class extends self.ISpriteInstance {},
	Game_Coin: class extends self.ISpriteInstance {},
	GameOver_CoinIcon: class extends self.ISpriteInstance {},
	Sky_Cloud: class extends self.ISpriteInstance {},
	GameOver_Screen: class extends self.ISpriteInstance {},
	GameOver_HighScore: class extends self.ISpriteInstance {},
	FinalScore_Display: class extends self.ISpriteInstance {},
	GameOver_TitleText: class extends self.ISpriteInstance {},
	HUD_CoinCounter: class extends self.ISpriteInstance {},
	Game_Logo: class extends self.ISpriteInstance {},
	Game_Platform: class extends self.ISpriteInstance {},
	HUD_AlternateCoin: class extends self.ISpriteInstance {},
	Collectible_Object: class extends self.ISpriteInstance {},
	Left_Control: class extends self.ISpriteInstance {},
	Effect_Particles: class extends self.IParticlesInstance {},
	Right_Control: class extends self.ISpriteInstance {}
}