# Some
Some class to preserve Types while working with any/unknown  
upstream url: https://codeberg.org/anhsirk0/some-ts

### Usage
Array
```typescript
Some.Array();                            // => []
Some.Array(data?.users);                 // => [user1, user2, ...] or []
Some.Array(data?.users, [{ name: "" }]); // => [user1, user2, ...] or [{ name: "" }]
```

String
```typescript
Some.String();                   // => ""
Some.String(user?.name);         // => "user name" or ""
Some.String(user?.name, "User"); // => "user's name" or "User"
```

Number
```typescript
Some.Number();              // => 0
Some.Number(user?.age);     // => 20 or 0
Some.Number(user?.age, 18); // => 20 or 18
```

Boolean
```typescript
Some.Boolean();                     // => false
Some.Boolean(user?.isActive, true); // => false or true
Some.Boolean(true.toString());      // => true
Some.Boolean(false.toString());     // => false
```

Object
```typescript
Some.Object();                         // => {}
Some.Object(user?.data);               // => { name: "user" } or {}
Some.Object(user?.data, { name: "" }); // => { name: "user name" } or { name: "" }
```


