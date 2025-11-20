
  module.exports = {
  uniqueTitle: () => {
    const now = new Date();
    const pad = n => n.toString().padStart(2, '0');

    const yyyy = now.getFullYear();
    const mm   = pad(now.getMonth() + 1);
    const dd   = pad(now.getDate());
    const hh   = pad(now.getHours());
    const min  = pad(now.getMinutes());
    const ss   = pad(now.getSeconds());

    return `My note ${yyyy}${mm}${dd}_${hh}${min}${ss}`;
  },
  sampleBody: 'This is my first note\nThis is the second line of my note',
  longNote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Sed do eiusmod tempor incididunt ut labore \net dolore magna aliqua.\n Ut enim ad minim veniam,\n quis nostrud exercitation\n ullamco laboris nisi ut\n aliquip ex ea commodo consequat.\n Duis aute irure\n dolor in reprehenderit in\n voluptate velit esse cillum dolore \neu fugiat nulla pariatur. Excepteur sint \noccaecat cupidatat\n non proident, sunt in culpa qui officia \ndeserunt mollit anim id est laborum. \n \n \n \n checksdhd ksdf notresas k\n dfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfg sdfg sdfg \nsdfg sdfg sdfg sdfg sdfgsdf gsd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg sd fg The last line!',
};
