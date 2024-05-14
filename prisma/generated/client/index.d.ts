
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DietryRestriction
 * 
 */
export type DietryRestriction = $Result.DefaultSelection<Prisma.$DietryRestrictionPayload>
/**
 * Model TripAddOn
 * 
 */
export type TripAddOn = $Result.DefaultSelection<Prisma.$TripAddOnPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentPlan: {
  MOJA_PLAN: 'MOJA_PLAN',
  PACHA_PLAN: 'PACHA_PLAN',
  TATU_PLAN: 'TATU_PLAN'
};

export type PaymentPlan = (typeof PaymentPlan)[keyof typeof PaymentPlan]

}

export type PaymentPlan = $Enums.PaymentPlan

export const PaymentPlan: typeof $Enums.PaymentPlan

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.dietryRestriction`: Exposes CRUD operations for the **DietryRestriction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DietryRestrictions
    * const dietryRestrictions = await prisma.dietryRestriction.findMany()
    * ```
    */
  get dietryRestriction(): Prisma.DietryRestrictionDelegate<ExtArgs>;

  /**
   * `prisma.tripAddOn`: Exposes CRUD operations for the **TripAddOn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripAddOns
    * const tripAddOns = await prisma.tripAddOn.findMany()
    * ```
    */
  get tripAddOn(): Prisma.TripAddOnDelegate<ExtArgs>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DietryRestriction: 'DietryRestriction',
    TripAddOn: 'TripAddOn',
    Package: 'Package',
    Property: 'Property'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'dietryRestriction' | 'tripAddOn' | 'package' | 'property'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DietryRestriction: {
        payload: Prisma.$DietryRestrictionPayload<ExtArgs>
        fields: Prisma.DietryRestrictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietryRestrictionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietryRestrictionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>
          }
          findFirst: {
            args: Prisma.DietryRestrictionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietryRestrictionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>
          }
          findMany: {
            args: Prisma.DietryRestrictionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>[]
          }
          create: {
            args: Prisma.DietryRestrictionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>
          }
          createMany: {
            args: Prisma.DietryRestrictionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DietryRestrictionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>
          }
          update: {
            args: Prisma.DietryRestrictionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>
          }
          deleteMany: {
            args: Prisma.DietryRestrictionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DietryRestrictionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DietryRestrictionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietryRestrictionPayload>
          }
          aggregate: {
            args: Prisma.DietryRestrictionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDietryRestriction>
          }
          groupBy: {
            args: Prisma.DietryRestrictionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DietryRestrictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietryRestrictionCountArgs<ExtArgs>,
            result: $Utils.Optional<DietryRestrictionCountAggregateOutputType> | number
          }
        }
      }
      TripAddOn: {
        payload: Prisma.$TripAddOnPayload<ExtArgs>
        fields: Prisma.TripAddOnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripAddOnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripAddOnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>
          }
          findFirst: {
            args: Prisma.TripAddOnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripAddOnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>
          }
          findMany: {
            args: Prisma.TripAddOnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>[]
          }
          create: {
            args: Prisma.TripAddOnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>
          }
          createMany: {
            args: Prisma.TripAddOnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TripAddOnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>
          }
          update: {
            args: Prisma.TripAddOnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>
          }
          deleteMany: {
            args: Prisma.TripAddOnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TripAddOnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TripAddOnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TripAddOnPayload>
          }
          aggregate: {
            args: Prisma.TripAddOnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTripAddOn>
          }
          groupBy: {
            args: Prisma.TripAddOnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TripAddOnGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripAddOnCountArgs<ExtArgs>,
            result: $Utils.Optional<TripAddOnCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>,
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>,
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dietryRestrictions: number
    tripAddOns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietryRestrictions?: boolean | UserCountOutputTypeCountDietryRestrictionsArgs
    tripAddOns?: boolean | UserCountOutputTypeCountTripAddOnsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDietryRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietryRestrictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTripAddOnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripAddOnWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    properties: number
    User: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PackageCountOutputTypeCountPropertiesArgs
    User?: boolean | PackageCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    arrivalDate: Date | null
    arrivalFlightInfo: string | null
    departureDate: Date | null
    departureFlightInfo: string | null
    paymentPlan: $Enums.PaymentPlan | null
    createdAt: Date | null
    updatedAt: Date | null
    packageId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    arrivalDate: Date | null
    arrivalFlightInfo: string | null
    departureDate: Date | null
    departureFlightInfo: string | null
    paymentPlan: $Enums.PaymentPlan | null
    createdAt: Date | null
    updatedAt: Date | null
    packageId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    arrivalDate: number
    arrivalFlightInfo: number
    departureDate: number
    departureFlightInfo: number
    paymentPlan: number
    createdAt: number
    updatedAt: number
    packageId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    arrivalDate?: true
    arrivalFlightInfo?: true
    departureDate?: true
    departureFlightInfo?: true
    paymentPlan?: true
    createdAt?: true
    updatedAt?: true
    packageId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    arrivalDate?: true
    arrivalFlightInfo?: true
    departureDate?: true
    departureFlightInfo?: true
    paymentPlan?: true
    createdAt?: true
    updatedAt?: true
    packageId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    arrivalDate?: true
    arrivalFlightInfo?: true
    departureDate?: true
    departureFlightInfo?: true
    paymentPlan?: true
    createdAt?: true
    updatedAt?: true
    packageId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    arrivalDate: Date
    arrivalFlightInfo: string
    departureDate: Date
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt: Date
    updatedAt: Date
    packageId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    arrivalDate?: boolean
    arrivalFlightInfo?: boolean
    departureDate?: boolean
    departureFlightInfo?: boolean
    paymentPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packageId?: boolean
    dietryRestrictions?: boolean | User$dietryRestrictionsArgs<ExtArgs>
    tripAddOns?: boolean | User$tripAddOnsArgs<ExtArgs>
    package?: boolean | User$packageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    arrivalDate?: boolean
    arrivalFlightInfo?: boolean
    departureDate?: boolean
    departureFlightInfo?: boolean
    paymentPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packageId?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietryRestrictions?: boolean | User$dietryRestrictionsArgs<ExtArgs>
    tripAddOns?: boolean | User$tripAddOnsArgs<ExtArgs>
    package?: boolean | User$packageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dietryRestrictions: Prisma.$DietryRestrictionPayload<ExtArgs>[]
      tripAddOns: Prisma.$TripAddOnPayload<ExtArgs>[]
      package: Prisma.$PackagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      arrivalDate: Date
      arrivalFlightInfo: string
      departureDate: Date
      departureFlightInfo: string
      paymentPlan: $Enums.PaymentPlan
      createdAt: Date
      updatedAt: Date
      packageId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dietryRestrictions<T extends User$dietryRestrictionsArgs<ExtArgs> = {}>(args?: Subset<T, User$dietryRestrictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'findMany'> | Null>;

    tripAddOns<T extends User$tripAddOnsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripAddOnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'findMany'> | Null>;

    package<T extends User$packageArgs<ExtArgs> = {}>(args?: Subset<T, User$packageArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly arrivalDate: FieldRef<"User", 'DateTime'>
    readonly arrivalFlightInfo: FieldRef<"User", 'String'>
    readonly departureDate: FieldRef<"User", 'DateTime'>
    readonly departureFlightInfo: FieldRef<"User", 'String'>
    readonly paymentPlan: FieldRef<"User", 'PaymentPlan'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly packageId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.dietryRestrictions
   */
  export type User$dietryRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    where?: DietryRestrictionWhereInput
    orderBy?: DietryRestrictionOrderByWithRelationInput | DietryRestrictionOrderByWithRelationInput[]
    cursor?: DietryRestrictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietryRestrictionScalarFieldEnum | DietryRestrictionScalarFieldEnum[]
  }

  /**
   * User.tripAddOns
   */
  export type User$tripAddOnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    where?: TripAddOnWhereInput
    orderBy?: TripAddOnOrderByWithRelationInput | TripAddOnOrderByWithRelationInput[]
    cursor?: TripAddOnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripAddOnScalarFieldEnum | TripAddOnScalarFieldEnum[]
  }

  /**
   * User.package
   */
  export type User$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DietryRestriction
   */

  export type AggregateDietryRestriction = {
    _count: DietryRestrictionCountAggregateOutputType | null
    _min: DietryRestrictionMinAggregateOutputType | null
    _max: DietryRestrictionMaxAggregateOutputType | null
  }

  export type DietryRestrictionMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type DietryRestrictionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type DietryRestrictionCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type DietryRestrictionMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type DietryRestrictionMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type DietryRestrictionCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type DietryRestrictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietryRestriction to aggregate.
     */
    where?: DietryRestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietryRestrictions to fetch.
     */
    orderBy?: DietryRestrictionOrderByWithRelationInput | DietryRestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietryRestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietryRestrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietryRestrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DietryRestrictions
    **/
    _count?: true | DietryRestrictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietryRestrictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietryRestrictionMaxAggregateInputType
  }

  export type GetDietryRestrictionAggregateType<T extends DietryRestrictionAggregateArgs> = {
        [P in keyof T & keyof AggregateDietryRestriction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDietryRestriction[P]>
      : GetScalarType<T[P], AggregateDietryRestriction[P]>
  }




  export type DietryRestrictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietryRestrictionWhereInput
    orderBy?: DietryRestrictionOrderByWithAggregationInput | DietryRestrictionOrderByWithAggregationInput[]
    by: DietryRestrictionScalarFieldEnum[] | DietryRestrictionScalarFieldEnum
    having?: DietryRestrictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietryRestrictionCountAggregateInputType | true
    _min?: DietryRestrictionMinAggregateInputType
    _max?: DietryRestrictionMaxAggregateInputType
  }

  export type DietryRestrictionGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: DietryRestrictionCountAggregateOutputType | null
    _min: DietryRestrictionMinAggregateOutputType | null
    _max: DietryRestrictionMaxAggregateOutputType | null
  }

  type GetDietryRestrictionGroupByPayload<T extends DietryRestrictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietryRestrictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietryRestrictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietryRestrictionGroupByOutputType[P]>
            : GetScalarType<T[P], DietryRestrictionGroupByOutputType[P]>
        }
      >
    >


  export type DietryRestrictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietryRestriction"]>

  export type DietryRestrictionSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }


  export type DietryRestrictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DietryRestrictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DietryRestriction"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["dietryRestriction"]>
    composites: {}
  }


  type DietryRestrictionGetPayload<S extends boolean | null | undefined | DietryRestrictionDefaultArgs> = $Result.GetResult<Prisma.$DietryRestrictionPayload, S>

  type DietryRestrictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DietryRestrictionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DietryRestrictionCountAggregateInputType | true
    }

  export interface DietryRestrictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DietryRestriction'], meta: { name: 'DietryRestriction' } }
    /**
     * Find zero or one DietryRestriction that matches the filter.
     * @param {DietryRestrictionFindUniqueArgs} args - Arguments to find a DietryRestriction
     * @example
     * // Get one DietryRestriction
     * const dietryRestriction = await prisma.dietryRestriction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DietryRestrictionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DietryRestrictionFindUniqueArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DietryRestriction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DietryRestrictionFindUniqueOrThrowArgs} args - Arguments to find a DietryRestriction
     * @example
     * // Get one DietryRestriction
     * const dietryRestriction = await prisma.dietryRestriction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DietryRestrictionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DietryRestrictionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DietryRestriction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionFindFirstArgs} args - Arguments to find a DietryRestriction
     * @example
     * // Get one DietryRestriction
     * const dietryRestriction = await prisma.dietryRestriction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DietryRestrictionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DietryRestrictionFindFirstArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DietryRestriction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionFindFirstOrThrowArgs} args - Arguments to find a DietryRestriction
     * @example
     * // Get one DietryRestriction
     * const dietryRestriction = await prisma.dietryRestriction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DietryRestrictionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DietryRestrictionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DietryRestrictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DietryRestrictions
     * const dietryRestrictions = await prisma.dietryRestriction.findMany()
     * 
     * // Get first 10 DietryRestrictions
     * const dietryRestrictions = await prisma.dietryRestriction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietryRestrictionWithIdOnly = await prisma.dietryRestriction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DietryRestrictionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DietryRestrictionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DietryRestriction.
     * @param {DietryRestrictionCreateArgs} args - Arguments to create a DietryRestriction.
     * @example
     * // Create one DietryRestriction
     * const DietryRestriction = await prisma.dietryRestriction.create({
     *   data: {
     *     // ... data to create a DietryRestriction
     *   }
     * })
     * 
    **/
    create<T extends DietryRestrictionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DietryRestrictionCreateArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DietryRestrictions.
     *     @param {DietryRestrictionCreateManyArgs} args - Arguments to create many DietryRestrictions.
     *     @example
     *     // Create many DietryRestrictions
     *     const dietryRestriction = await prisma.dietryRestriction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DietryRestrictionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DietryRestrictionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DietryRestriction.
     * @param {DietryRestrictionDeleteArgs} args - Arguments to delete one DietryRestriction.
     * @example
     * // Delete one DietryRestriction
     * const DietryRestriction = await prisma.dietryRestriction.delete({
     *   where: {
     *     // ... filter to delete one DietryRestriction
     *   }
     * })
     * 
    **/
    delete<T extends DietryRestrictionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DietryRestrictionDeleteArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DietryRestriction.
     * @param {DietryRestrictionUpdateArgs} args - Arguments to update one DietryRestriction.
     * @example
     * // Update one DietryRestriction
     * const dietryRestriction = await prisma.dietryRestriction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DietryRestrictionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DietryRestrictionUpdateArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DietryRestrictions.
     * @param {DietryRestrictionDeleteManyArgs} args - Arguments to filter DietryRestrictions to delete.
     * @example
     * // Delete a few DietryRestrictions
     * const { count } = await prisma.dietryRestriction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DietryRestrictionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DietryRestrictionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietryRestrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DietryRestrictions
     * const dietryRestriction = await prisma.dietryRestriction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DietryRestrictionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DietryRestrictionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DietryRestriction.
     * @param {DietryRestrictionUpsertArgs} args - Arguments to update or create a DietryRestriction.
     * @example
     * // Update or create a DietryRestriction
     * const dietryRestriction = await prisma.dietryRestriction.upsert({
     *   create: {
     *     // ... data to create a DietryRestriction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DietryRestriction we want to update
     *   }
     * })
    **/
    upsert<T extends DietryRestrictionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DietryRestrictionUpsertArgs<ExtArgs>>
    ): Prisma__DietryRestrictionClient<$Result.GetResult<Prisma.$DietryRestrictionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DietryRestrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionCountArgs} args - Arguments to filter DietryRestrictions to count.
     * @example
     * // Count the number of DietryRestrictions
     * const count = await prisma.dietryRestriction.count({
     *   where: {
     *     // ... the filter for the DietryRestrictions we want to count
     *   }
     * })
    **/
    count<T extends DietryRestrictionCountArgs>(
      args?: Subset<T, DietryRestrictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietryRestrictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DietryRestriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DietryRestrictionAggregateArgs>(args: Subset<T, DietryRestrictionAggregateArgs>): Prisma.PrismaPromise<GetDietryRestrictionAggregateType<T>>

    /**
     * Group by DietryRestriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietryRestrictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DietryRestrictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietryRestrictionGroupByArgs['orderBy'] }
        : { orderBy?: DietryRestrictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DietryRestrictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietryRestrictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DietryRestriction model
   */
  readonly fields: DietryRestrictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DietryRestriction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietryRestrictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DietryRestriction model
   */ 
  interface DietryRestrictionFieldRefs {
    readonly id: FieldRef<"DietryRestriction", 'String'>
    readonly name: FieldRef<"DietryRestriction", 'String'>
    readonly userId: FieldRef<"DietryRestriction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DietryRestriction findUnique
   */
  export type DietryRestrictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * Filter, which DietryRestriction to fetch.
     */
    where: DietryRestrictionWhereUniqueInput
  }

  /**
   * DietryRestriction findUniqueOrThrow
   */
  export type DietryRestrictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * Filter, which DietryRestriction to fetch.
     */
    where: DietryRestrictionWhereUniqueInput
  }

  /**
   * DietryRestriction findFirst
   */
  export type DietryRestrictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * Filter, which DietryRestriction to fetch.
     */
    where?: DietryRestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietryRestrictions to fetch.
     */
    orderBy?: DietryRestrictionOrderByWithRelationInput | DietryRestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietryRestrictions.
     */
    cursor?: DietryRestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietryRestrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietryRestrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietryRestrictions.
     */
    distinct?: DietryRestrictionScalarFieldEnum | DietryRestrictionScalarFieldEnum[]
  }

  /**
   * DietryRestriction findFirstOrThrow
   */
  export type DietryRestrictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * Filter, which DietryRestriction to fetch.
     */
    where?: DietryRestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietryRestrictions to fetch.
     */
    orderBy?: DietryRestrictionOrderByWithRelationInput | DietryRestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietryRestrictions.
     */
    cursor?: DietryRestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietryRestrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietryRestrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietryRestrictions.
     */
    distinct?: DietryRestrictionScalarFieldEnum | DietryRestrictionScalarFieldEnum[]
  }

  /**
   * DietryRestriction findMany
   */
  export type DietryRestrictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * Filter, which DietryRestrictions to fetch.
     */
    where?: DietryRestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietryRestrictions to fetch.
     */
    orderBy?: DietryRestrictionOrderByWithRelationInput | DietryRestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DietryRestrictions.
     */
    cursor?: DietryRestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietryRestrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietryRestrictions.
     */
    skip?: number
    distinct?: DietryRestrictionScalarFieldEnum | DietryRestrictionScalarFieldEnum[]
  }

  /**
   * DietryRestriction create
   */
  export type DietryRestrictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * The data needed to create a DietryRestriction.
     */
    data: XOR<DietryRestrictionCreateInput, DietryRestrictionUncheckedCreateInput>
  }

  /**
   * DietryRestriction createMany
   */
  export type DietryRestrictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DietryRestrictions.
     */
    data: DietryRestrictionCreateManyInput | DietryRestrictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DietryRestriction update
   */
  export type DietryRestrictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * The data needed to update a DietryRestriction.
     */
    data: XOR<DietryRestrictionUpdateInput, DietryRestrictionUncheckedUpdateInput>
    /**
     * Choose, which DietryRestriction to update.
     */
    where: DietryRestrictionWhereUniqueInput
  }

  /**
   * DietryRestriction updateMany
   */
  export type DietryRestrictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DietryRestrictions.
     */
    data: XOR<DietryRestrictionUpdateManyMutationInput, DietryRestrictionUncheckedUpdateManyInput>
    /**
     * Filter which DietryRestrictions to update
     */
    where?: DietryRestrictionWhereInput
  }

  /**
   * DietryRestriction upsert
   */
  export type DietryRestrictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * The filter to search for the DietryRestriction to update in case it exists.
     */
    where: DietryRestrictionWhereUniqueInput
    /**
     * In case the DietryRestriction found by the `where` argument doesn't exist, create a new DietryRestriction with this data.
     */
    create: XOR<DietryRestrictionCreateInput, DietryRestrictionUncheckedCreateInput>
    /**
     * In case the DietryRestriction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietryRestrictionUpdateInput, DietryRestrictionUncheckedUpdateInput>
  }

  /**
   * DietryRestriction delete
   */
  export type DietryRestrictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
    /**
     * Filter which DietryRestriction to delete.
     */
    where: DietryRestrictionWhereUniqueInput
  }

  /**
   * DietryRestriction deleteMany
   */
  export type DietryRestrictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietryRestrictions to delete
     */
    where?: DietryRestrictionWhereInput
  }

  /**
   * DietryRestriction without action
   */
  export type DietryRestrictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietryRestriction
     */
    select?: DietryRestrictionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietryRestrictionInclude<ExtArgs> | null
  }


  /**
   * Model TripAddOn
   */

  export type AggregateTripAddOn = {
    _count: TripAddOnCountAggregateOutputType | null
    _avg: TripAddOnAvgAggregateOutputType | null
    _sum: TripAddOnSumAggregateOutputType | null
    _min: TripAddOnMinAggregateOutputType | null
    _max: TripAddOnMaxAggregateOutputType | null
  }

  export type TripAddOnAvgAggregateOutputType = {
    price: number | null
  }

  export type TripAddOnSumAggregateOutputType = {
    price: number | null
  }

  export type TripAddOnMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    userId: string | null
  }

  export type TripAddOnMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    userId: string | null
  }

  export type TripAddOnCountAggregateOutputType = {
    id: number
    name: number
    price: number
    userId: number
    _all: number
  }


  export type TripAddOnAvgAggregateInputType = {
    price?: true
  }

  export type TripAddOnSumAggregateInputType = {
    price?: true
  }

  export type TripAddOnMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    userId?: true
  }

  export type TripAddOnMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    userId?: true
  }

  export type TripAddOnCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    userId?: true
    _all?: true
  }

  export type TripAddOnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripAddOn to aggregate.
     */
    where?: TripAddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripAddOns to fetch.
     */
    orderBy?: TripAddOnOrderByWithRelationInput | TripAddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripAddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripAddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripAddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripAddOns
    **/
    _count?: true | TripAddOnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAddOnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripAddOnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripAddOnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripAddOnMaxAggregateInputType
  }

  export type GetTripAddOnAggregateType<T extends TripAddOnAggregateArgs> = {
        [P in keyof T & keyof AggregateTripAddOn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripAddOn[P]>
      : GetScalarType<T[P], AggregateTripAddOn[P]>
  }




  export type TripAddOnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripAddOnWhereInput
    orderBy?: TripAddOnOrderByWithAggregationInput | TripAddOnOrderByWithAggregationInput[]
    by: TripAddOnScalarFieldEnum[] | TripAddOnScalarFieldEnum
    having?: TripAddOnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripAddOnCountAggregateInputType | true
    _avg?: TripAddOnAvgAggregateInputType
    _sum?: TripAddOnSumAggregateInputType
    _min?: TripAddOnMinAggregateInputType
    _max?: TripAddOnMaxAggregateInputType
  }

  export type TripAddOnGroupByOutputType = {
    id: string
    name: string
    price: number
    userId: string
    _count: TripAddOnCountAggregateOutputType | null
    _avg: TripAddOnAvgAggregateOutputType | null
    _sum: TripAddOnSumAggregateOutputType | null
    _min: TripAddOnMinAggregateOutputType | null
    _max: TripAddOnMaxAggregateOutputType | null
  }

  type GetTripAddOnGroupByPayload<T extends TripAddOnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripAddOnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripAddOnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripAddOnGroupByOutputType[P]>
            : GetScalarType<T[P], TripAddOnGroupByOutputType[P]>
        }
      >
    >


  export type TripAddOnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    userId?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripAddOn"]>

  export type TripAddOnSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    userId?: boolean
  }


  export type TripAddOnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TripAddOnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripAddOn"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      userId: string
    }, ExtArgs["result"]["tripAddOn"]>
    composites: {}
  }


  type TripAddOnGetPayload<S extends boolean | null | undefined | TripAddOnDefaultArgs> = $Result.GetResult<Prisma.$TripAddOnPayload, S>

  type TripAddOnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripAddOnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripAddOnCountAggregateInputType | true
    }

  export interface TripAddOnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripAddOn'], meta: { name: 'TripAddOn' } }
    /**
     * Find zero or one TripAddOn that matches the filter.
     * @param {TripAddOnFindUniqueArgs} args - Arguments to find a TripAddOn
     * @example
     * // Get one TripAddOn
     * const tripAddOn = await prisma.tripAddOn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TripAddOnFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TripAddOnFindUniqueArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TripAddOn that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TripAddOnFindUniqueOrThrowArgs} args - Arguments to find a TripAddOn
     * @example
     * // Get one TripAddOn
     * const tripAddOn = await prisma.tripAddOn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TripAddOnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripAddOnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TripAddOn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnFindFirstArgs} args - Arguments to find a TripAddOn
     * @example
     * // Get one TripAddOn
     * const tripAddOn = await prisma.tripAddOn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TripAddOnFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TripAddOnFindFirstArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TripAddOn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnFindFirstOrThrowArgs} args - Arguments to find a TripAddOn
     * @example
     * // Get one TripAddOn
     * const tripAddOn = await prisma.tripAddOn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TripAddOnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TripAddOnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TripAddOns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripAddOns
     * const tripAddOns = await prisma.tripAddOn.findMany()
     * 
     * // Get first 10 TripAddOns
     * const tripAddOns = await prisma.tripAddOn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripAddOnWithIdOnly = await prisma.tripAddOn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TripAddOnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripAddOnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TripAddOn.
     * @param {TripAddOnCreateArgs} args - Arguments to create a TripAddOn.
     * @example
     * // Create one TripAddOn
     * const TripAddOn = await prisma.tripAddOn.create({
     *   data: {
     *     // ... data to create a TripAddOn
     *   }
     * })
     * 
    **/
    create<T extends TripAddOnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TripAddOnCreateArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TripAddOns.
     *     @param {TripAddOnCreateManyArgs} args - Arguments to create many TripAddOns.
     *     @example
     *     // Create many TripAddOns
     *     const tripAddOn = await prisma.tripAddOn.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TripAddOnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripAddOnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TripAddOn.
     * @param {TripAddOnDeleteArgs} args - Arguments to delete one TripAddOn.
     * @example
     * // Delete one TripAddOn
     * const TripAddOn = await prisma.tripAddOn.delete({
     *   where: {
     *     // ... filter to delete one TripAddOn
     *   }
     * })
     * 
    **/
    delete<T extends TripAddOnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TripAddOnDeleteArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TripAddOn.
     * @param {TripAddOnUpdateArgs} args - Arguments to update one TripAddOn.
     * @example
     * // Update one TripAddOn
     * const tripAddOn = await prisma.tripAddOn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TripAddOnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TripAddOnUpdateArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TripAddOns.
     * @param {TripAddOnDeleteManyArgs} args - Arguments to filter TripAddOns to delete.
     * @example
     * // Delete a few TripAddOns
     * const { count } = await prisma.tripAddOn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TripAddOnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TripAddOnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripAddOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripAddOns
     * const tripAddOn = await prisma.tripAddOn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TripAddOnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TripAddOnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TripAddOn.
     * @param {TripAddOnUpsertArgs} args - Arguments to update or create a TripAddOn.
     * @example
     * // Update or create a TripAddOn
     * const tripAddOn = await prisma.tripAddOn.upsert({
     *   create: {
     *     // ... data to create a TripAddOn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripAddOn we want to update
     *   }
     * })
    **/
    upsert<T extends TripAddOnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TripAddOnUpsertArgs<ExtArgs>>
    ): Prisma__TripAddOnClient<$Result.GetResult<Prisma.$TripAddOnPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TripAddOns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnCountArgs} args - Arguments to filter TripAddOns to count.
     * @example
     * // Count the number of TripAddOns
     * const count = await prisma.tripAddOn.count({
     *   where: {
     *     // ... the filter for the TripAddOns we want to count
     *   }
     * })
    **/
    count<T extends TripAddOnCountArgs>(
      args?: Subset<T, TripAddOnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripAddOnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripAddOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAddOnAggregateArgs>(args: Subset<T, TripAddOnAggregateArgs>): Prisma.PrismaPromise<GetTripAddOnAggregateType<T>>

    /**
     * Group by TripAddOn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAddOnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripAddOnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripAddOnGroupByArgs['orderBy'] }
        : { orderBy?: TripAddOnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripAddOnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripAddOnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripAddOn model
   */
  readonly fields: TripAddOnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripAddOn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripAddOnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TripAddOn model
   */ 
  interface TripAddOnFieldRefs {
    readonly id: FieldRef<"TripAddOn", 'String'>
    readonly name: FieldRef<"TripAddOn", 'String'>
    readonly price: FieldRef<"TripAddOn", 'Float'>
    readonly userId: FieldRef<"TripAddOn", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripAddOn findUnique
   */
  export type TripAddOnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * Filter, which TripAddOn to fetch.
     */
    where: TripAddOnWhereUniqueInput
  }

  /**
   * TripAddOn findUniqueOrThrow
   */
  export type TripAddOnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * Filter, which TripAddOn to fetch.
     */
    where: TripAddOnWhereUniqueInput
  }

  /**
   * TripAddOn findFirst
   */
  export type TripAddOnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * Filter, which TripAddOn to fetch.
     */
    where?: TripAddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripAddOns to fetch.
     */
    orderBy?: TripAddOnOrderByWithRelationInput | TripAddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripAddOns.
     */
    cursor?: TripAddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripAddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripAddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripAddOns.
     */
    distinct?: TripAddOnScalarFieldEnum | TripAddOnScalarFieldEnum[]
  }

  /**
   * TripAddOn findFirstOrThrow
   */
  export type TripAddOnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * Filter, which TripAddOn to fetch.
     */
    where?: TripAddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripAddOns to fetch.
     */
    orderBy?: TripAddOnOrderByWithRelationInput | TripAddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripAddOns.
     */
    cursor?: TripAddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripAddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripAddOns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripAddOns.
     */
    distinct?: TripAddOnScalarFieldEnum | TripAddOnScalarFieldEnum[]
  }

  /**
   * TripAddOn findMany
   */
  export type TripAddOnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * Filter, which TripAddOns to fetch.
     */
    where?: TripAddOnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripAddOns to fetch.
     */
    orderBy?: TripAddOnOrderByWithRelationInput | TripAddOnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripAddOns.
     */
    cursor?: TripAddOnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripAddOns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripAddOns.
     */
    skip?: number
    distinct?: TripAddOnScalarFieldEnum | TripAddOnScalarFieldEnum[]
  }

  /**
   * TripAddOn create
   */
  export type TripAddOnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * The data needed to create a TripAddOn.
     */
    data: XOR<TripAddOnCreateInput, TripAddOnUncheckedCreateInput>
  }

  /**
   * TripAddOn createMany
   */
  export type TripAddOnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripAddOns.
     */
    data: TripAddOnCreateManyInput | TripAddOnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripAddOn update
   */
  export type TripAddOnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * The data needed to update a TripAddOn.
     */
    data: XOR<TripAddOnUpdateInput, TripAddOnUncheckedUpdateInput>
    /**
     * Choose, which TripAddOn to update.
     */
    where: TripAddOnWhereUniqueInput
  }

  /**
   * TripAddOn updateMany
   */
  export type TripAddOnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripAddOns.
     */
    data: XOR<TripAddOnUpdateManyMutationInput, TripAddOnUncheckedUpdateManyInput>
    /**
     * Filter which TripAddOns to update
     */
    where?: TripAddOnWhereInput
  }

  /**
   * TripAddOn upsert
   */
  export type TripAddOnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * The filter to search for the TripAddOn to update in case it exists.
     */
    where: TripAddOnWhereUniqueInput
    /**
     * In case the TripAddOn found by the `where` argument doesn't exist, create a new TripAddOn with this data.
     */
    create: XOR<TripAddOnCreateInput, TripAddOnUncheckedCreateInput>
    /**
     * In case the TripAddOn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripAddOnUpdateInput, TripAddOnUncheckedUpdateInput>
  }

  /**
   * TripAddOn delete
   */
  export type TripAddOnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
    /**
     * Filter which TripAddOn to delete.
     */
    where: TripAddOnWhereUniqueInput
  }

  /**
   * TripAddOn deleteMany
   */
  export type TripAddOnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripAddOns to delete
     */
    where?: TripAddOnWhereInput
  }

  /**
   * TripAddOn without action
   */
  export type TripAddOnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripAddOn
     */
    select?: TripAddOnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripAddOnInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    price: number | null
    availableVolume: number | null
  }

  export type PackageSumAggregateOutputType = {
    price: number | null
    availableVolume: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    price: number | null
    availableVolume: number | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    price: number | null
    availableVolume: number | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    price: number
    availableVolume: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    price?: true
    availableVolume?: true
  }

  export type PackageSumAggregateInputType = {
    price?: true
    availableVolume?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    availableVolume?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    availableVolume?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    price?: true
    availableVolume?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    price: number
    availableVolume: number
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    availableVolume?: boolean
    properties?: boolean | Package$propertiesArgs<ExtArgs>
    User?: boolean | Package$UserArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    availableVolume?: boolean
  }


  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Package$propertiesArgs<ExtArgs>
    User?: boolean | Package$UserArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      imageUrl: string | null
      price: number
      availableVolume: number
    }, ExtArgs["result"]["package"]>
    composites: {}
  }


  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PackageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Package that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PackageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PackageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
    **/
    create<T extends PackageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageCreateArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Packages.
     *     @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     *     @example
     *     // Create many Packages
     *     const package = await prisma.package.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PackageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
    **/
    delete<T extends PackageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PackageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PackageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PackageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
    **/
    upsert<T extends PackageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>
    ): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    properties<T extends Package$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Package$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends Package$UserArgs<ExtArgs> = {}>(args?: Subset<T, Package$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Package model
   */ 
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly name: FieldRef<"Package", 'String'>
    readonly description: FieldRef<"Package", 'String'>
    readonly imageUrl: FieldRef<"Package", 'String'>
    readonly price: FieldRef<"Package", 'Float'>
    readonly availableVolume: FieldRef<"Package", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
  }

  /**
   * Package.properties
   */
  export type Package$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Package.User
   */
  export type Package$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    capacity: number | null
  }

  export type PropertySumAggregateOutputType = {
    capacity: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    room: string | null
    capacity: number | null
    packageId: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    room: string | null
    capacity: number | null
    packageId: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    room: number
    capacity: number
    packageId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    capacity?: true
  }

  export type PropertySumAggregateInputType = {
    capacity?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    room?: true
    capacity?: true
    packageId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    room?: true
    capacity?: true
    packageId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    room?: true
    capacity?: true
    packageId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    name: string
    room: string
    capacity: number | null
    packageId: string
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    room?: boolean
    capacity?: boolean
    packageId?: boolean
    Package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    room?: boolean
    capacity?: boolean
    packageId?: boolean
  }


  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Package?: boolean | PackageDefaultArgs<ExtArgs>
  }


  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      Package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      room: string
      capacity: number | null
      packageId: string
    }, ExtArgs["result"]["property"]>
    composites: {}
  }


  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropertyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
    **/
    create<T extends PropertyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Properties.
     *     @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     *     @example
     *     // Create many Properties
     *     const property = await prisma.property.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
    **/
    delete<T extends PropertyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>
    ): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly room: FieldRef<"Property", 'String'>
    readonly capacity: FieldRef<"Property", 'Int'>
    readonly packageId: FieldRef<"Property", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    arrivalDate: 'arrivalDate',
    arrivalFlightInfo: 'arrivalFlightInfo',
    departureDate: 'departureDate',
    departureFlightInfo: 'departureFlightInfo',
    paymentPlan: 'paymentPlan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    packageId: 'packageId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DietryRestrictionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type DietryRestrictionScalarFieldEnum = (typeof DietryRestrictionScalarFieldEnum)[keyof typeof DietryRestrictionScalarFieldEnum]


  export const TripAddOnScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    userId: 'userId'
  };

  export type TripAddOnScalarFieldEnum = (typeof TripAddOnScalarFieldEnum)[keyof typeof TripAddOnScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    price: 'price',
    availableVolume: 'availableVolume'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    room: 'room',
    capacity: 'capacity',
    packageId: 'packageId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PaymentPlan'
   */
  export type EnumPaymentPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPlan'>
    


  /**
   * Reference to a field of type 'PaymentPlan[]'
   */
  export type ListEnumPaymentPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPlan[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    arrivalDate?: DateTimeFilter<"User"> | Date | string
    arrivalFlightInfo?: StringFilter<"User"> | string
    departureDate?: DateTimeFilter<"User"> | Date | string
    departureFlightInfo?: StringFilter<"User"> | string
    paymentPlan?: EnumPaymentPlanFilter<"User"> | $Enums.PaymentPlan
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    packageId?: StringNullableFilter<"User"> | string | null
    dietryRestrictions?: DietryRestrictionListRelationFilter
    tripAddOns?: TripAddOnListRelationFilter
    package?: XOR<PackageNullableRelationFilter, PackageWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    arrivalDate?: SortOrder
    arrivalFlightInfo?: SortOrder
    departureDate?: SortOrder
    departureFlightInfo?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packageId?: SortOrderInput | SortOrder
    dietryRestrictions?: DietryRestrictionOrderByRelationAggregateInput
    tripAddOns?: TripAddOnOrderByRelationAggregateInput
    package?: PackageOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    arrivalDate?: DateTimeFilter<"User"> | Date | string
    arrivalFlightInfo?: StringFilter<"User"> | string
    departureDate?: DateTimeFilter<"User"> | Date | string
    departureFlightInfo?: StringFilter<"User"> | string
    paymentPlan?: EnumPaymentPlanFilter<"User"> | $Enums.PaymentPlan
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    packageId?: StringNullableFilter<"User"> | string | null
    dietryRestrictions?: DietryRestrictionListRelationFilter
    tripAddOns?: TripAddOnListRelationFilter
    package?: XOR<PackageNullableRelationFilter, PackageWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    arrivalDate?: SortOrder
    arrivalFlightInfo?: SortOrder
    departureDate?: SortOrder
    departureFlightInfo?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packageId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    arrivalDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    arrivalFlightInfo?: StringWithAggregatesFilter<"User"> | string
    departureDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    departureFlightInfo?: StringWithAggregatesFilter<"User"> | string
    paymentPlan?: EnumPaymentPlanWithAggregatesFilter<"User"> | $Enums.PaymentPlan
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    packageId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DietryRestrictionWhereInput = {
    AND?: DietryRestrictionWhereInput | DietryRestrictionWhereInput[]
    OR?: DietryRestrictionWhereInput[]
    NOT?: DietryRestrictionWhereInput | DietryRestrictionWhereInput[]
    id?: StringFilter<"DietryRestriction"> | string
    name?: StringFilter<"DietryRestriction"> | string
    userId?: StringFilter<"DietryRestriction"> | string
    users?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DietryRestrictionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    users?: UserOrderByWithRelationInput
  }

  export type DietryRestrictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DietryRestrictionWhereInput | DietryRestrictionWhereInput[]
    OR?: DietryRestrictionWhereInput[]
    NOT?: DietryRestrictionWhereInput | DietryRestrictionWhereInput[]
    name?: StringFilter<"DietryRestriction"> | string
    userId?: StringFilter<"DietryRestriction"> | string
    users?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DietryRestrictionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: DietryRestrictionCountOrderByAggregateInput
    _max?: DietryRestrictionMaxOrderByAggregateInput
    _min?: DietryRestrictionMinOrderByAggregateInput
  }

  export type DietryRestrictionScalarWhereWithAggregatesInput = {
    AND?: DietryRestrictionScalarWhereWithAggregatesInput | DietryRestrictionScalarWhereWithAggregatesInput[]
    OR?: DietryRestrictionScalarWhereWithAggregatesInput[]
    NOT?: DietryRestrictionScalarWhereWithAggregatesInput | DietryRestrictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DietryRestriction"> | string
    name?: StringWithAggregatesFilter<"DietryRestriction"> | string
    userId?: StringWithAggregatesFilter<"DietryRestriction"> | string
  }

  export type TripAddOnWhereInput = {
    AND?: TripAddOnWhereInput | TripAddOnWhereInput[]
    OR?: TripAddOnWhereInput[]
    NOT?: TripAddOnWhereInput | TripAddOnWhereInput[]
    id?: StringFilter<"TripAddOn"> | string
    name?: StringFilter<"TripAddOn"> | string
    price?: FloatFilter<"TripAddOn"> | number
    userId?: StringFilter<"TripAddOn"> | string
    users?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TripAddOnOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    users?: UserOrderByWithRelationInput
  }

  export type TripAddOnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripAddOnWhereInput | TripAddOnWhereInput[]
    OR?: TripAddOnWhereInput[]
    NOT?: TripAddOnWhereInput | TripAddOnWhereInput[]
    name?: StringFilter<"TripAddOn"> | string
    price?: FloatFilter<"TripAddOn"> | number
    userId?: StringFilter<"TripAddOn"> | string
    users?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TripAddOnOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    _count?: TripAddOnCountOrderByAggregateInput
    _avg?: TripAddOnAvgOrderByAggregateInput
    _max?: TripAddOnMaxOrderByAggregateInput
    _min?: TripAddOnMinOrderByAggregateInput
    _sum?: TripAddOnSumOrderByAggregateInput
  }

  export type TripAddOnScalarWhereWithAggregatesInput = {
    AND?: TripAddOnScalarWhereWithAggregatesInput | TripAddOnScalarWhereWithAggregatesInput[]
    OR?: TripAddOnScalarWhereWithAggregatesInput[]
    NOT?: TripAddOnScalarWhereWithAggregatesInput | TripAddOnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripAddOn"> | string
    name?: StringWithAggregatesFilter<"TripAddOn"> | string
    price?: FloatWithAggregatesFilter<"TripAddOn"> | number
    userId?: StringWithAggregatesFilter<"TripAddOn"> | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    imageUrl?: StringNullableFilter<"Package"> | string | null
    price?: FloatFilter<"Package"> | number
    availableVolume?: IntFilter<"Package"> | number
    properties?: PropertyListRelationFilter
    User?: UserListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    availableVolume?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    description?: StringNullableFilter<"Package"> | string | null
    imageUrl?: StringNullableFilter<"Package"> | string | null
    price?: FloatFilter<"Package"> | number
    availableVolume?: IntFilter<"Package"> | number
    properties?: PropertyListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    availableVolume?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    name?: StringWithAggregatesFilter<"Package"> | string
    description?: StringNullableWithAggregatesFilter<"Package"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Package"> | string | null
    price?: FloatWithAggregatesFilter<"Package"> | number
    availableVolume?: IntWithAggregatesFilter<"Package"> | number
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    room?: StringFilter<"Property"> | string
    capacity?: IntNullableFilter<"Property"> | number | null
    packageId?: StringFilter<"Property"> | string
    Package?: XOR<PackageRelationFilter, PackageWhereInput>
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    room?: SortOrder
    capacity?: SortOrderInput | SortOrder
    packageId?: SortOrder
    Package?: PackageOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    room?: StringFilter<"Property"> | string
    capacity?: IntNullableFilter<"Property"> | number | null
    packageId?: StringFilter<"Property"> | string
    Package?: XOR<PackageRelationFilter, PackageWhereInput>
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    room?: SortOrder
    capacity?: SortOrderInput | SortOrder
    packageId?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    room?: StringWithAggregatesFilter<"Property"> | string
    capacity?: IntNullableWithAggregatesFilter<"Property"> | number | null
    packageId?: StringWithAggregatesFilter<"Property"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    dietryRestrictions?: DietryRestrictionCreateNestedManyWithoutUsersInput
    tripAddOns?: TripAddOnCreateNestedManyWithoutUsersInput
    package?: PackageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    packageId?: string | null
    dietryRestrictions?: DietryRestrictionUncheckedCreateNestedManyWithoutUsersInput
    tripAddOns?: TripAddOnUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietryRestrictions?: DietryRestrictionUpdateManyWithoutUsersNestedInput
    tripAddOns?: TripAddOnUpdateManyWithoutUsersNestedInput
    package?: PackageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    dietryRestrictions?: DietryRestrictionUncheckedUpdateManyWithoutUsersNestedInput
    tripAddOns?: TripAddOnUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    packageId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DietryRestrictionCreateInput = {
    id?: string
    name: string
    users: UserCreateNestedOneWithoutDietryRestrictionsInput
  }

  export type DietryRestrictionUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
  }

  export type DietryRestrictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateOneRequiredWithoutDietryRestrictionsNestedInput
  }

  export type DietryRestrictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DietryRestrictionCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type DietryRestrictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietryRestrictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TripAddOnCreateInput = {
    id?: string
    name: string
    price: number
    users: UserCreateNestedOneWithoutTripAddOnsInput
  }

  export type TripAddOnUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    userId: string
  }

  export type TripAddOnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    users?: UserUpdateOneRequiredWithoutTripAddOnsNestedInput
  }

  export type TripAddOnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TripAddOnCreateManyInput = {
    id?: string
    name: string
    price: number
    userId: string
  }

  export type TripAddOnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TripAddOnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PackageCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
    properties?: PropertyCreateNestedManyWithoutPackageInput
    User?: UserCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
    properties?: PropertyUncheckedCreateNestedManyWithoutPackageInput
    User?: UserUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
    properties?: PropertyUpdateManyWithoutPackageNestedInput
    User?: UserUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
    properties?: PropertyUncheckedUpdateManyWithoutPackageNestedInput
    User?: UserUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    room: string
    capacity?: number | null
    Package: PackageCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    name: string
    room: string
    capacity?: number | null
    packageId: string
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Package?: PackageUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateManyInput = {
    id?: string
    name: string
    room: string
    capacity?: number | null
    packageId: string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    packageId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumPaymentPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanFilter<$PrismaModel> | $Enums.PaymentPlan
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DietryRestrictionListRelationFilter = {
    every?: DietryRestrictionWhereInput
    some?: DietryRestrictionWhereInput
    none?: DietryRestrictionWhereInput
  }

  export type TripAddOnListRelationFilter = {
    every?: TripAddOnWhereInput
    some?: TripAddOnWhereInput
    none?: TripAddOnWhereInput
  }

  export type PackageNullableRelationFilter = {
    is?: PackageWhereInput | null
    isNot?: PackageWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DietryRestrictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripAddOnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    arrivalDate?: SortOrder
    arrivalFlightInfo?: SortOrder
    departureDate?: SortOrder
    departureFlightInfo?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packageId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    arrivalDate?: SortOrder
    arrivalFlightInfo?: SortOrder
    departureDate?: SortOrder
    departureFlightInfo?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packageId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    arrivalDate?: SortOrder
    arrivalFlightInfo?: SortOrder
    departureDate?: SortOrder
    departureFlightInfo?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packageId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPaymentPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPlanFilter<$PrismaModel>
    _max?: NestedEnumPaymentPlanFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DietryRestrictionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type DietryRestrictionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type DietryRestrictionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TripAddOnCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type TripAddOnAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TripAddOnMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type TripAddOnMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type TripAddOnSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    availableVolume?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    price?: SortOrder
    availableVolume?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    availableVolume?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    availableVolume?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    price?: SortOrder
    availableVolume?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PackageRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room?: SortOrder
    capacity?: SortOrder
    packageId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room?: SortOrder
    capacity?: SortOrder
    packageId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    room?: SortOrder
    capacity?: SortOrder
    packageId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DietryRestrictionCreateNestedManyWithoutUsersInput = {
    create?: XOR<DietryRestrictionCreateWithoutUsersInput, DietryRestrictionUncheckedCreateWithoutUsersInput> | DietryRestrictionCreateWithoutUsersInput[] | DietryRestrictionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DietryRestrictionCreateOrConnectWithoutUsersInput | DietryRestrictionCreateOrConnectWithoutUsersInput[]
    createMany?: DietryRestrictionCreateManyUsersInputEnvelope
    connect?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
  }

  export type TripAddOnCreateNestedManyWithoutUsersInput = {
    create?: XOR<TripAddOnCreateWithoutUsersInput, TripAddOnUncheckedCreateWithoutUsersInput> | TripAddOnCreateWithoutUsersInput[] | TripAddOnUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TripAddOnCreateOrConnectWithoutUsersInput | TripAddOnCreateOrConnectWithoutUsersInput[]
    createMany?: TripAddOnCreateManyUsersInputEnvelope
    connect?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
  }

  export type PackageCreateNestedOneWithoutUserInput = {
    create?: XOR<PackageCreateWithoutUserInput, PackageUncheckedCreateWithoutUserInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserInput
    connect?: PackageWhereUniqueInput
  }

  export type DietryRestrictionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<DietryRestrictionCreateWithoutUsersInput, DietryRestrictionUncheckedCreateWithoutUsersInput> | DietryRestrictionCreateWithoutUsersInput[] | DietryRestrictionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DietryRestrictionCreateOrConnectWithoutUsersInput | DietryRestrictionCreateOrConnectWithoutUsersInput[]
    createMany?: DietryRestrictionCreateManyUsersInputEnvelope
    connect?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
  }

  export type TripAddOnUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TripAddOnCreateWithoutUsersInput, TripAddOnUncheckedCreateWithoutUsersInput> | TripAddOnCreateWithoutUsersInput[] | TripAddOnUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TripAddOnCreateOrConnectWithoutUsersInput | TripAddOnCreateOrConnectWithoutUsersInput[]
    createMany?: TripAddOnCreateManyUsersInputEnvelope
    connect?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumPaymentPlanFieldUpdateOperationsInput = {
    set?: $Enums.PaymentPlan
  }

  export type DietryRestrictionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DietryRestrictionCreateWithoutUsersInput, DietryRestrictionUncheckedCreateWithoutUsersInput> | DietryRestrictionCreateWithoutUsersInput[] | DietryRestrictionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DietryRestrictionCreateOrConnectWithoutUsersInput | DietryRestrictionCreateOrConnectWithoutUsersInput[]
    upsert?: DietryRestrictionUpsertWithWhereUniqueWithoutUsersInput | DietryRestrictionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DietryRestrictionCreateManyUsersInputEnvelope
    set?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    disconnect?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    delete?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    connect?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    update?: DietryRestrictionUpdateWithWhereUniqueWithoutUsersInput | DietryRestrictionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DietryRestrictionUpdateManyWithWhereWithoutUsersInput | DietryRestrictionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DietryRestrictionScalarWhereInput | DietryRestrictionScalarWhereInput[]
  }

  export type TripAddOnUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TripAddOnCreateWithoutUsersInput, TripAddOnUncheckedCreateWithoutUsersInput> | TripAddOnCreateWithoutUsersInput[] | TripAddOnUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TripAddOnCreateOrConnectWithoutUsersInput | TripAddOnCreateOrConnectWithoutUsersInput[]
    upsert?: TripAddOnUpsertWithWhereUniqueWithoutUsersInput | TripAddOnUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TripAddOnCreateManyUsersInputEnvelope
    set?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    disconnect?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    delete?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    connect?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    update?: TripAddOnUpdateWithWhereUniqueWithoutUsersInput | TripAddOnUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TripAddOnUpdateManyWithWhereWithoutUsersInput | TripAddOnUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TripAddOnScalarWhereInput | TripAddOnScalarWhereInput[]
  }

  export type PackageUpdateOneWithoutUserNestedInput = {
    create?: XOR<PackageCreateWithoutUserInput, PackageUncheckedCreateWithoutUserInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserInput
    upsert?: PackageUpsertWithoutUserInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutUserInput, PackageUpdateWithoutUserInput>, PackageUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DietryRestrictionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DietryRestrictionCreateWithoutUsersInput, DietryRestrictionUncheckedCreateWithoutUsersInput> | DietryRestrictionCreateWithoutUsersInput[] | DietryRestrictionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DietryRestrictionCreateOrConnectWithoutUsersInput | DietryRestrictionCreateOrConnectWithoutUsersInput[]
    upsert?: DietryRestrictionUpsertWithWhereUniqueWithoutUsersInput | DietryRestrictionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DietryRestrictionCreateManyUsersInputEnvelope
    set?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    disconnect?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    delete?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    connect?: DietryRestrictionWhereUniqueInput | DietryRestrictionWhereUniqueInput[]
    update?: DietryRestrictionUpdateWithWhereUniqueWithoutUsersInput | DietryRestrictionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DietryRestrictionUpdateManyWithWhereWithoutUsersInput | DietryRestrictionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DietryRestrictionScalarWhereInput | DietryRestrictionScalarWhereInput[]
  }

  export type TripAddOnUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TripAddOnCreateWithoutUsersInput, TripAddOnUncheckedCreateWithoutUsersInput> | TripAddOnCreateWithoutUsersInput[] | TripAddOnUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TripAddOnCreateOrConnectWithoutUsersInput | TripAddOnCreateOrConnectWithoutUsersInput[]
    upsert?: TripAddOnUpsertWithWhereUniqueWithoutUsersInput | TripAddOnUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TripAddOnCreateManyUsersInputEnvelope
    set?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    disconnect?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    delete?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    connect?: TripAddOnWhereUniqueInput | TripAddOnWhereUniqueInput[]
    update?: TripAddOnUpdateWithWhereUniqueWithoutUsersInput | TripAddOnUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TripAddOnUpdateManyWithWhereWithoutUsersInput | TripAddOnUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TripAddOnScalarWhereInput | TripAddOnScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDietryRestrictionsInput = {
    create?: XOR<UserCreateWithoutDietryRestrictionsInput, UserUncheckedCreateWithoutDietryRestrictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDietryRestrictionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDietryRestrictionsNestedInput = {
    create?: XOR<UserCreateWithoutDietryRestrictionsInput, UserUncheckedCreateWithoutDietryRestrictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDietryRestrictionsInput
    upsert?: UserUpsertWithoutDietryRestrictionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDietryRestrictionsInput, UserUpdateWithoutDietryRestrictionsInput>, UserUncheckedUpdateWithoutDietryRestrictionsInput>
  }

  export type UserCreateNestedOneWithoutTripAddOnsInput = {
    create?: XOR<UserCreateWithoutTripAddOnsInput, UserUncheckedCreateWithoutTripAddOnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripAddOnsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTripAddOnsNestedInput = {
    create?: XOR<UserCreateWithoutTripAddOnsInput, UserUncheckedCreateWithoutTripAddOnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripAddOnsInput
    upsert?: UserUpsertWithoutTripAddOnsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripAddOnsInput, UserUpdateWithoutTripAddOnsInput>, UserUncheckedUpdateWithoutTripAddOnsInput>
  }

  export type PropertyCreateNestedManyWithoutPackageInput = {
    create?: XOR<PropertyCreateWithoutPackageInput, PropertyUncheckedCreateWithoutPackageInput> | PropertyCreateWithoutPackageInput[] | PropertyUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPackageInput | PropertyCreateOrConnectWithoutPackageInput[]
    createMany?: PropertyCreateManyPackageInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<PropertyCreateWithoutPackageInput, PropertyUncheckedCreateWithoutPackageInput> | PropertyCreateWithoutPackageInput[] | PropertyUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPackageInput | PropertyCreateOrConnectWithoutPackageInput[]
    createMany?: PropertyCreateManyPackageInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PropertyCreateWithoutPackageInput, PropertyUncheckedCreateWithoutPackageInput> | PropertyCreateWithoutPackageInput[] | PropertyUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPackageInput | PropertyCreateOrConnectWithoutPackageInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutPackageInput | PropertyUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PropertyCreateManyPackageInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutPackageInput | PropertyUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutPackageInput | PropertyUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPackageInput | UserUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPackageInput | UserUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPackageInput | UserUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PropertyCreateWithoutPackageInput, PropertyUncheckedCreateWithoutPackageInput> | PropertyCreateWithoutPackageInput[] | PropertyUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPackageInput | PropertyCreateOrConnectWithoutPackageInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutPackageInput | PropertyUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PropertyCreateManyPackageInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutPackageInput | PropertyUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutPackageInput | PropertyUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPackageInput | UserUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPackageInput | UserUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPackageInput | UserUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PackageCreateWithoutPropertiesInput, PackageUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPropertiesInput
    connect?: PackageWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PackageUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<PackageCreateWithoutPropertiesInput, PackageUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPropertiesInput
    upsert?: PackageUpsertWithoutPropertiesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutPropertiesInput, PackageUpdateWithoutPropertiesInput>, PackageUncheckedUpdateWithoutPropertiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumPaymentPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanFilter<$PrismaModel> | $Enums.PaymentPlan
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentPlanWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentPlanFilter<$PrismaModel>
    _max?: NestedEnumPaymentPlanFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DietryRestrictionCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type DietryRestrictionUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type DietryRestrictionCreateOrConnectWithoutUsersInput = {
    where: DietryRestrictionWhereUniqueInput
    create: XOR<DietryRestrictionCreateWithoutUsersInput, DietryRestrictionUncheckedCreateWithoutUsersInput>
  }

  export type DietryRestrictionCreateManyUsersInputEnvelope = {
    data: DietryRestrictionCreateManyUsersInput | DietryRestrictionCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TripAddOnCreateWithoutUsersInput = {
    id?: string
    name: string
    price: number
  }

  export type TripAddOnUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    price: number
  }

  export type TripAddOnCreateOrConnectWithoutUsersInput = {
    where: TripAddOnWhereUniqueInput
    create: XOR<TripAddOnCreateWithoutUsersInput, TripAddOnUncheckedCreateWithoutUsersInput>
  }

  export type TripAddOnCreateManyUsersInputEnvelope = {
    data: TripAddOnCreateManyUsersInput | TripAddOnCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type PackageCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
    properties?: PropertyCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
    properties?: PropertyUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutUserInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUserInput, PackageUncheckedCreateWithoutUserInput>
  }

  export type DietryRestrictionUpsertWithWhereUniqueWithoutUsersInput = {
    where: DietryRestrictionWhereUniqueInput
    update: XOR<DietryRestrictionUpdateWithoutUsersInput, DietryRestrictionUncheckedUpdateWithoutUsersInput>
    create: XOR<DietryRestrictionCreateWithoutUsersInput, DietryRestrictionUncheckedCreateWithoutUsersInput>
  }

  export type DietryRestrictionUpdateWithWhereUniqueWithoutUsersInput = {
    where: DietryRestrictionWhereUniqueInput
    data: XOR<DietryRestrictionUpdateWithoutUsersInput, DietryRestrictionUncheckedUpdateWithoutUsersInput>
  }

  export type DietryRestrictionUpdateManyWithWhereWithoutUsersInput = {
    where: DietryRestrictionScalarWhereInput
    data: XOR<DietryRestrictionUpdateManyMutationInput, DietryRestrictionUncheckedUpdateManyWithoutUsersInput>
  }

  export type DietryRestrictionScalarWhereInput = {
    AND?: DietryRestrictionScalarWhereInput | DietryRestrictionScalarWhereInput[]
    OR?: DietryRestrictionScalarWhereInput[]
    NOT?: DietryRestrictionScalarWhereInput | DietryRestrictionScalarWhereInput[]
    id?: StringFilter<"DietryRestriction"> | string
    name?: StringFilter<"DietryRestriction"> | string
    userId?: StringFilter<"DietryRestriction"> | string
  }

  export type TripAddOnUpsertWithWhereUniqueWithoutUsersInput = {
    where: TripAddOnWhereUniqueInput
    update: XOR<TripAddOnUpdateWithoutUsersInput, TripAddOnUncheckedUpdateWithoutUsersInput>
    create: XOR<TripAddOnCreateWithoutUsersInput, TripAddOnUncheckedCreateWithoutUsersInput>
  }

  export type TripAddOnUpdateWithWhereUniqueWithoutUsersInput = {
    where: TripAddOnWhereUniqueInput
    data: XOR<TripAddOnUpdateWithoutUsersInput, TripAddOnUncheckedUpdateWithoutUsersInput>
  }

  export type TripAddOnUpdateManyWithWhereWithoutUsersInput = {
    where: TripAddOnScalarWhereInput
    data: XOR<TripAddOnUpdateManyMutationInput, TripAddOnUncheckedUpdateManyWithoutUsersInput>
  }

  export type TripAddOnScalarWhereInput = {
    AND?: TripAddOnScalarWhereInput | TripAddOnScalarWhereInput[]
    OR?: TripAddOnScalarWhereInput[]
    NOT?: TripAddOnScalarWhereInput | TripAddOnScalarWhereInput[]
    id?: StringFilter<"TripAddOn"> | string
    name?: StringFilter<"TripAddOn"> | string
    price?: FloatFilter<"TripAddOn"> | number
    userId?: StringFilter<"TripAddOn"> | string
  }

  export type PackageUpsertWithoutUserInput = {
    update: XOR<PackageUpdateWithoutUserInput, PackageUncheckedUpdateWithoutUserInput>
    create: XOR<PackageCreateWithoutUserInput, PackageUncheckedCreateWithoutUserInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutUserInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutUserInput, PackageUncheckedUpdateWithoutUserInput>
  }

  export type PackageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
    properties?: PropertyUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
    properties?: PropertyUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type UserCreateWithoutDietryRestrictionsInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    tripAddOns?: TripAddOnCreateNestedManyWithoutUsersInput
    package?: PackageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDietryRestrictionsInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    packageId?: string | null
    tripAddOns?: TripAddOnUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutDietryRestrictionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDietryRestrictionsInput, UserUncheckedCreateWithoutDietryRestrictionsInput>
  }

  export type UserUpsertWithoutDietryRestrictionsInput = {
    update: XOR<UserUpdateWithoutDietryRestrictionsInput, UserUncheckedUpdateWithoutDietryRestrictionsInput>
    create: XOR<UserCreateWithoutDietryRestrictionsInput, UserUncheckedCreateWithoutDietryRestrictionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDietryRestrictionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDietryRestrictionsInput, UserUncheckedUpdateWithoutDietryRestrictionsInput>
  }

  export type UserUpdateWithoutDietryRestrictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripAddOns?: TripAddOnUpdateManyWithoutUsersNestedInput
    package?: PackageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDietryRestrictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    tripAddOns?: TripAddOnUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutTripAddOnsInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    dietryRestrictions?: DietryRestrictionCreateNestedManyWithoutUsersInput
    package?: PackageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripAddOnsInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    packageId?: string | null
    dietryRestrictions?: DietryRestrictionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutTripAddOnsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripAddOnsInput, UserUncheckedCreateWithoutTripAddOnsInput>
  }

  export type UserUpsertWithoutTripAddOnsInput = {
    update: XOR<UserUpdateWithoutTripAddOnsInput, UserUncheckedUpdateWithoutTripAddOnsInput>
    create: XOR<UserCreateWithoutTripAddOnsInput, UserUncheckedCreateWithoutTripAddOnsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripAddOnsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripAddOnsInput, UserUncheckedUpdateWithoutTripAddOnsInput>
  }

  export type UserUpdateWithoutTripAddOnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietryRestrictions?: DietryRestrictionUpdateManyWithoutUsersNestedInput
    package?: PackageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripAddOnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    dietryRestrictions?: DietryRestrictionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PropertyCreateWithoutPackageInput = {
    id?: string
    name: string
    room: string
    capacity?: number | null
  }

  export type PropertyUncheckedCreateWithoutPackageInput = {
    id?: string
    name: string
    room: string
    capacity?: number | null
  }

  export type PropertyCreateOrConnectWithoutPackageInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPackageInput, PropertyUncheckedCreateWithoutPackageInput>
  }

  export type PropertyCreateManyPackageInputEnvelope = {
    data: PropertyCreateManyPackageInput | PropertyCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPackageInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    dietryRestrictions?: DietryRestrictionCreateNestedManyWithoutUsersInput
    tripAddOns?: TripAddOnCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPackageInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    dietryRestrictions?: DietryRestrictionUncheckedCreateNestedManyWithoutUsersInput
    tripAddOns?: TripAddOnUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutPackageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput>
  }

  export type UserCreateManyPackageInputEnvelope = {
    data: UserCreateManyPackageInput | UserCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutPackageInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutPackageInput, PropertyUncheckedUpdateWithoutPackageInput>
    create: XOR<PropertyCreateWithoutPackageInput, PropertyUncheckedCreateWithoutPackageInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutPackageInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutPackageInput, PropertyUncheckedUpdateWithoutPackageInput>
  }

  export type PropertyUpdateManyWithWhereWithoutPackageInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutPackageInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    room?: StringFilter<"Property"> | string
    capacity?: IntNullableFilter<"Property"> | number | null
    packageId?: StringFilter<"Property"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutPackageInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPackageInput, UserUncheckedUpdateWithoutPackageInput>
    create: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPackageInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPackageInput, UserUncheckedUpdateWithoutPackageInput>
  }

  export type UserUpdateManyWithWhereWithoutPackageInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    arrivalDate?: DateTimeFilter<"User"> | Date | string
    arrivalFlightInfo?: StringFilter<"User"> | string
    departureDate?: DateTimeFilter<"User"> | Date | string
    departureFlightInfo?: StringFilter<"User"> | string
    paymentPlan?: EnumPaymentPlanFilter<"User"> | $Enums.PaymentPlan
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    packageId?: StringNullableFilter<"User"> | string | null
  }

  export type PackageCreateWithoutPropertiesInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
    User?: UserCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    price: number
    availableVolume?: number
    User?: UserUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutPropertiesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutPropertiesInput, PackageUncheckedCreateWithoutPropertiesInput>
  }

  export type PackageUpsertWithoutPropertiesInput = {
    update: XOR<PackageUpdateWithoutPropertiesInput, PackageUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PackageCreateWithoutPropertiesInput, PackageUncheckedCreateWithoutPropertiesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutPropertiesInput, PackageUncheckedUpdateWithoutPropertiesInput>
  }

  export type PackageUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    availableVolume?: IntFieldUpdateOperationsInput | number
    User?: UserUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type DietryRestrictionCreateManyUsersInput = {
    id?: string
    name: string
  }

  export type TripAddOnCreateManyUsersInput = {
    id?: string
    name: string
    price: number
  }

  export type DietryRestrictionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietryRestrictionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietryRestrictionUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TripAddOnUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TripAddOnUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TripAddOnUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PropertyCreateManyPackageInput = {
    id?: string
    name: string
    room: string
    capacity?: number | null
  }

  export type UserCreateManyPackageInput = {
    id?: string
    email: string
    name: string
    arrivalDate: Date | string
    arrivalFlightInfo: string
    departureDate: Date | string
    departureFlightInfo: string
    paymentPlan: $Enums.PaymentPlan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropertyUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropertyUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietryRestrictions?: DietryRestrictionUpdateManyWithoutUsersNestedInput
    tripAddOns?: TripAddOnUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietryRestrictions?: DietryRestrictionUncheckedUpdateManyWithoutUsersNestedInput
    tripAddOns?: TripAddOnUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    arrivalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlightInfo?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlightInfo?: StringFieldUpdateOperationsInput | string
    paymentPlan?: EnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PackageCountOutputTypeDefaultArgs instead
     */
    export type PackageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PackageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DietryRestrictionDefaultArgs instead
     */
    export type DietryRestrictionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DietryRestrictionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripAddOnDefaultArgs instead
     */
    export type TripAddOnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripAddOnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PackageDefaultArgs instead
     */
    export type PackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PackageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}