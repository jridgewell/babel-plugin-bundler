export default function ({ Plugin, types: t }) {
  return new Plugin("bundler", {
    visitor: {
      // your visitor methods go here
    }
  });
}
