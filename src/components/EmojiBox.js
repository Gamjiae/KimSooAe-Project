const EmojiBox = ({ onSelectEmoji }) => {
  const emojis = [
    require('../Emoji/game.png'),
    require('../Emoji/forkspoon.png'),
    require('../Emoji/hotcoffee.png'),
    require('../Emoji/ball.png'),
    require('../Emoji/beach.png'),
    require('../Emoji/beer.png'),
    require('../Emoji/fish.png'),
    require('../Emoji/helmet.png'),
    require('../Emoji/pizza.png'),
    require('../Emoji/score.png'),
    require('../Emoji/tennis.png'),
    require('../Emoji/bread.png'),
    require('../Emoji/cat.png'),
    require('../Emoji/computer.png'),
    require('../Emoji/dog.png'),
    require('../Emoji/dogfoot.png'),
    require('../Emoji/dollar.png'),
    require('../Emoji/flower.png'),
    require('../Emoji/heart.png'),
    require('../Emoji/home.png'),
    require('../Emoji/hospital.png'),
    require('../Emoji/icecream.png'),
    require('../Emoji/pen.png'),
    require('../Emoji/person.png'),
    require('../Emoji/pin.png'),
    require('../Emoji/rabbit.png'),
    require('../Emoji/school.png'),
    require('../Emoji/scissors.png'),
    require('../Emoji/star.png'),
    require('../Emoji/thumb.png')
  ];

  return (
    <div className="h-[calc(100%-270px)] bg-[#dedede] rounded-[2px] p-[10px] my-[30px] grid grid-cols-6 gap-[10px] overflow-y-auto md:grid-cols-8 lg:grid-cols-10">
      {emojis.map((emoji, index) => (
        <img
          key={index}
          src={emoji}
          alt={`emoji-${index}`}
          className="w-[41px] h-[41px] cursor-pointer hover:transform hover:scale-110 transition-transform duration-200"
          onClick={() => onSelectEmoji(emoji)}
        />
      ))}
    </div>
  );
};

export default EmojiBox;