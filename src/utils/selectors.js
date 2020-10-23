export default {
  landingPage: {
    joinAnonymousButton: 'form button',
  },
  homePage: {
    nameInput: '#screenHome input',
    createRoomButton: '#screenHome .actions .icon-gear',
  },
  createRoomPage: {
    createRoomButton: '#screenCreate .actions button',
  },
  gamePage: {
    startGameButton: '#screenGame .start button',
    finishGameButton: '#screenGame .content button:not(.disable)',
    isAbleToFillAnswers: '#screenGame .answers',
    isAbleToFinish: '#screenGame .time-auto',
  },

  components: {
    popout: {
      closeButton: '#popup button.close',
    },
  },
};
