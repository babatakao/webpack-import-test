import { foo } from './module';

function main() {
  if (true) {
    // This "foo" should reference the exported function defined in "module.js".
    console.log(foo());
  }
  if (true) {
    // This "foo" is a block-local variable. Should not affect to the first "if" block.
    const foo = 2;
  }
}

main();