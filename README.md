# Salutations

Auto-generate cheery greeting messages.

## Say hello to the small folk

```
ts-node ./scripts/greetings.ts --name Bob --gender male
What is thy bidding, pal?
Yes, Bob-san?
What is your command, my man?
Dude! How may I be of assistance?
What is thy bidding, Bob-kun?
Ah, guy!
What is your command, citizen?
What is thy bidding, Bob-kun?
What is your command, citizen?
Greetings, Bob-kun!
```

## Pomp and circumstance

Flatter your friends with titles fit for a grand admiral.

```
ts-node ./scripts/greetings.ts --name Alice --noble --gender female
Welcome, Alice-sama!
What is your command, my viscountess?
Ah, dame Alice!
Ah, supreme viscountess!
What is thy bidding, queen Alice?
Ah, my mistress Alice!
Ser Alice! How may I be of assistance?
Welcome, your majesty!
What's up, lady empress Alice?
Hello, Alice-sama.
```

```
ts-node ./scripts/greetings.ts --name Bob --noble --gender male
Yes, comrade emperor Bob?
What's up, ser Bob?
What is thy bidding, sir Bob?
What is your command, caesar?
What is thy bidding, consul?
What is thy bidding, your excellency?
What's up, your grace?
What is thy bidding, viscount Bob?
Greetings, my king Bob!
Greetings, consul!
```

## JavaScript / Typescript API

```ts
import { generate, Gender } from '@portable-profiles/salutations';

const greeting = generate({
  name: 'Alice',
  gender: Gender.FEMALE,
  noble: true
});
// Ah, dame Alice!
```
