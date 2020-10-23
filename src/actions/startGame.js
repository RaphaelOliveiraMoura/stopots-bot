import waitAndClick from '../utils/waitAndClick';
import selectors from '../utils/selectors';

export default async function startGame() {
  await waitAndClick(selectors.gamePage.startGameButton);
}
