
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Consultant
 * 
 */
export type Consultant = $Result.DefaultSelection<Prisma.$ConsultantPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskPriority
 * 
 */
export type TaskPriority = $Result.DefaultSelection<Prisma.$TaskPriorityPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Consultants
 * const consultants = await prisma.consultant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Consultants
   * const consultants = await prisma.consultant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.consultant`: Exposes CRUD operations for the **Consultant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultants
    * const consultants = await prisma.consultant.findMany()
    * ```
    */
  get consultant(): Prisma.ConsultantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskPriority`: Exposes CRUD operations for the **TaskPriority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskPriorities
    * const taskPriorities = await prisma.taskPriority.findMany()
    * ```
    */
  get taskPriority(): Prisma.TaskPriorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Consultant: 'Consultant',
    Task: 'Task',
    TaskPriority: 'TaskPriority',
    User: 'User',
    UserRole: 'UserRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "consultant" | "task" | "taskPriority" | "user" | "userRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Consultant: {
        payload: Prisma.$ConsultantPayload<ExtArgs>
        fields: Prisma.ConsultantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>
          }
          findFirst: {
            args: Prisma.ConsultantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>
          }
          findMany: {
            args: Prisma.ConsultantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>[]
          }
          create: {
            args: Prisma.ConsultantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>
          }
          createMany: {
            args: Prisma.ConsultantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>[]
          }
          delete: {
            args: Prisma.ConsultantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>
          }
          update: {
            args: Prisma.ConsultantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>
          }
          deleteMany: {
            args: Prisma.ConsultantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>[]
          }
          upsert: {
            args: Prisma.ConsultantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultantPayload>
          }
          aggregate: {
            args: Prisma.ConsultantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultant>
          }
          groupBy: {
            args: Prisma.ConsultantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultantCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultantCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskPriority: {
        payload: Prisma.$TaskPriorityPayload<ExtArgs>
        fields: Prisma.TaskPriorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskPriorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskPriorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          findFirst: {
            args: Prisma.TaskPriorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskPriorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          findMany: {
            args: Prisma.TaskPriorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>[]
          }
          create: {
            args: Prisma.TaskPriorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          createMany: {
            args: Prisma.TaskPriorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskPriorityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>[]
          }
          delete: {
            args: Prisma.TaskPriorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          update: {
            args: Prisma.TaskPriorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          deleteMany: {
            args: Prisma.TaskPriorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskPriorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskPriorityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>[]
          }
          upsert: {
            args: Prisma.TaskPriorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPriorityPayload>
          }
          aggregate: {
            args: Prisma.TaskPriorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskPriority>
          }
          groupBy: {
            args: Prisma.TaskPriorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskPriorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskPriorityCountArgs<ExtArgs>
            result: $Utils.Optional<TaskPriorityCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    consultant?: ConsultantOmit
    task?: TaskOmit
    taskPriority?: TaskPriorityOmit
    user?: UserOmit
    userRole?: UserRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ConsultantCountOutputType
   */

  export type ConsultantCountOutputType = {
    Task: number
  }

  export type ConsultantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | ConsultantCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * ConsultantCountOutputType without action
   */
  export type ConsultantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultantCountOutputType
     */
    select?: ConsultantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultantCountOutputType without action
   */
  export type ConsultantCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskPriorityCountOutputType
   */

  export type TaskPriorityCountOutputType = {
    Task: number
  }

  export type TaskPriorityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | TaskPriorityCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * TaskPriorityCountOutputType without action
   */
  export type TaskPriorityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriorityCountOutputType
     */
    select?: TaskPriorityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskPriorityCountOutputType without action
   */
  export type TaskPriorityCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Task: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | UserCountOutputTypeCountTaskArgs
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
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    User: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserRoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Consultant
   */

  export type AggregateConsultant = {
    _count: ConsultantCountAggregateOutputType | null
    _avg: ConsultantAvgAggregateOutputType | null
    _sum: ConsultantSumAggregateOutputType | null
    _min: ConsultantMinAggregateOutputType | null
    _max: ConsultantMaxAggregateOutputType | null
  }

  export type ConsultantAvgAggregateOutputType = {
    ConsultantID: number | null
  }

  export type ConsultantSumAggregateOutputType = {
    ConsultantID: number | null
  }

  export type ConsultantMinAggregateOutputType = {
    ConsultantID: number | null
    ConsultantFirstName: string | null
    ConsultantLastName: string | null
    ConsultantRole: string | null
  }

  export type ConsultantMaxAggregateOutputType = {
    ConsultantID: number | null
    ConsultantFirstName: string | null
    ConsultantLastName: string | null
    ConsultantRole: string | null
  }

  export type ConsultantCountAggregateOutputType = {
    ConsultantID: number
    ConsultantFirstName: number
    ConsultantLastName: number
    ConsultantRole: number
    _all: number
  }


  export type ConsultantAvgAggregateInputType = {
    ConsultantID?: true
  }

  export type ConsultantSumAggregateInputType = {
    ConsultantID?: true
  }

  export type ConsultantMinAggregateInputType = {
    ConsultantID?: true
    ConsultantFirstName?: true
    ConsultantLastName?: true
    ConsultantRole?: true
  }

  export type ConsultantMaxAggregateInputType = {
    ConsultantID?: true
    ConsultantFirstName?: true
    ConsultantLastName?: true
    ConsultantRole?: true
  }

  export type ConsultantCountAggregateInputType = {
    ConsultantID?: true
    ConsultantFirstName?: true
    ConsultantLastName?: true
    ConsultantRole?: true
    _all?: true
  }

  export type ConsultantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultant to aggregate.
     */
    where?: ConsultantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultants to fetch.
     */
    orderBy?: ConsultantOrderByWithRelationInput | ConsultantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultants
    **/
    _count?: true | ConsultantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultantMaxAggregateInputType
  }

  export type GetConsultantAggregateType<T extends ConsultantAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultant[P]>
      : GetScalarType<T[P], AggregateConsultant[P]>
  }




  export type ConsultantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultantWhereInput
    orderBy?: ConsultantOrderByWithAggregationInput | ConsultantOrderByWithAggregationInput[]
    by: ConsultantScalarFieldEnum[] | ConsultantScalarFieldEnum
    having?: ConsultantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultantCountAggregateInputType | true
    _avg?: ConsultantAvgAggregateInputType
    _sum?: ConsultantSumAggregateInputType
    _min?: ConsultantMinAggregateInputType
    _max?: ConsultantMaxAggregateInputType
  }

  export type ConsultantGroupByOutputType = {
    ConsultantID: number
    ConsultantFirstName: string
    ConsultantLastName: string
    ConsultantRole: string
    _count: ConsultantCountAggregateOutputType | null
    _avg: ConsultantAvgAggregateOutputType | null
    _sum: ConsultantSumAggregateOutputType | null
    _min: ConsultantMinAggregateOutputType | null
    _max: ConsultantMaxAggregateOutputType | null
  }

  type GetConsultantGroupByPayload<T extends ConsultantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultantGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultantGroupByOutputType[P]>
        }
      >
    >


  export type ConsultantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ConsultantID?: boolean
    ConsultantFirstName?: boolean
    ConsultantLastName?: boolean
    ConsultantRole?: boolean
    Task?: boolean | Consultant$TaskArgs<ExtArgs>
    _count?: boolean | ConsultantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultant"]>

  export type ConsultantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ConsultantID?: boolean
    ConsultantFirstName?: boolean
    ConsultantLastName?: boolean
    ConsultantRole?: boolean
  }, ExtArgs["result"]["consultant"]>

  export type ConsultantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ConsultantID?: boolean
    ConsultantFirstName?: boolean
    ConsultantLastName?: boolean
    ConsultantRole?: boolean
  }, ExtArgs["result"]["consultant"]>

  export type ConsultantSelectScalar = {
    ConsultantID?: boolean
    ConsultantFirstName?: boolean
    ConsultantLastName?: boolean
    ConsultantRole?: boolean
  }

  export type ConsultantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ConsultantID" | "ConsultantFirstName" | "ConsultantLastName" | "ConsultantRole", ExtArgs["result"]["consultant"]>
  export type ConsultantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | Consultant$TaskArgs<ExtArgs>
    _count?: boolean | ConsultantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConsultantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConsultantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultant"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ConsultantID: number
      ConsultantFirstName: string
      ConsultantLastName: string
      ConsultantRole: string
    }, ExtArgs["result"]["consultant"]>
    composites: {}
  }

  type ConsultantGetPayload<S extends boolean | null | undefined | ConsultantDefaultArgs> = $Result.GetResult<Prisma.$ConsultantPayload, S>

  type ConsultantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultantCountAggregateInputType | true
    }

  export interface ConsultantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultant'], meta: { name: 'Consultant' } }
    /**
     * Find zero or one Consultant that matches the filter.
     * @param {ConsultantFindUniqueArgs} args - Arguments to find a Consultant
     * @example
     * // Get one Consultant
     * const consultant = await prisma.consultant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultantFindUniqueArgs>(args: SelectSubset<T, ConsultantFindUniqueArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultantFindUniqueOrThrowArgs} args - Arguments to find a Consultant
     * @example
     * // Get one Consultant
     * const consultant = await prisma.consultant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultantFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantFindFirstArgs} args - Arguments to find a Consultant
     * @example
     * // Get one Consultant
     * const consultant = await prisma.consultant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultantFindFirstArgs>(args?: SelectSubset<T, ConsultantFindFirstArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantFindFirstOrThrowArgs} args - Arguments to find a Consultant
     * @example
     * // Get one Consultant
     * const consultant = await prisma.consultant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultantFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultants
     * const consultants = await prisma.consultant.findMany()
     * 
     * // Get first 10 Consultants
     * const consultants = await prisma.consultant.findMany({ take: 10 })
     * 
     * // Only select the `ConsultantID`
     * const consultantWithConsultantIDOnly = await prisma.consultant.findMany({ select: { ConsultantID: true } })
     * 
     */
    findMany<T extends ConsultantFindManyArgs>(args?: SelectSubset<T, ConsultantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultant.
     * @param {ConsultantCreateArgs} args - Arguments to create a Consultant.
     * @example
     * // Create one Consultant
     * const Consultant = await prisma.consultant.create({
     *   data: {
     *     // ... data to create a Consultant
     *   }
     * })
     * 
     */
    create<T extends ConsultantCreateArgs>(args: SelectSubset<T, ConsultantCreateArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultants.
     * @param {ConsultantCreateManyArgs} args - Arguments to create many Consultants.
     * @example
     * // Create many Consultants
     * const consultant = await prisma.consultant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultantCreateManyArgs>(args?: SelectSubset<T, ConsultantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultants and returns the data saved in the database.
     * @param {ConsultantCreateManyAndReturnArgs} args - Arguments to create many Consultants.
     * @example
     * // Create many Consultants
     * const consultant = await prisma.consultant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultants and only return the `ConsultantID`
     * const consultantWithConsultantIDOnly = await prisma.consultant.createManyAndReturn({
     *   select: { ConsultantID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultantCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultant.
     * @param {ConsultantDeleteArgs} args - Arguments to delete one Consultant.
     * @example
     * // Delete one Consultant
     * const Consultant = await prisma.consultant.delete({
     *   where: {
     *     // ... filter to delete one Consultant
     *   }
     * })
     * 
     */
    delete<T extends ConsultantDeleteArgs>(args: SelectSubset<T, ConsultantDeleteArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultant.
     * @param {ConsultantUpdateArgs} args - Arguments to update one Consultant.
     * @example
     * // Update one Consultant
     * const consultant = await prisma.consultant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultantUpdateArgs>(args: SelectSubset<T, ConsultantUpdateArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultants.
     * @param {ConsultantDeleteManyArgs} args - Arguments to filter Consultants to delete.
     * @example
     * // Delete a few Consultants
     * const { count } = await prisma.consultant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultantDeleteManyArgs>(args?: SelectSubset<T, ConsultantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultants
     * const consultant = await prisma.consultant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultantUpdateManyArgs>(args: SelectSubset<T, ConsultantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultants and returns the data updated in the database.
     * @param {ConsultantUpdateManyAndReturnArgs} args - Arguments to update many Consultants.
     * @example
     * // Update many Consultants
     * const consultant = await prisma.consultant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultants and only return the `ConsultantID`
     * const consultantWithConsultantIDOnly = await prisma.consultant.updateManyAndReturn({
     *   select: { ConsultantID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultantUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultant.
     * @param {ConsultantUpsertArgs} args - Arguments to update or create a Consultant.
     * @example
     * // Update or create a Consultant
     * const consultant = await prisma.consultant.upsert({
     *   create: {
     *     // ... data to create a Consultant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultant we want to update
     *   }
     * })
     */
    upsert<T extends ConsultantUpsertArgs>(args: SelectSubset<T, ConsultantUpsertArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantCountArgs} args - Arguments to filter Consultants to count.
     * @example
     * // Count the number of Consultants
     * const count = await prisma.consultant.count({
     *   where: {
     *     // ... the filter for the Consultants we want to count
     *   }
     * })
    **/
    count<T extends ConsultantCountArgs>(
      args?: Subset<T, ConsultantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultantAggregateArgs>(args: Subset<T, ConsultantAggregateArgs>): Prisma.PrismaPromise<GetConsultantAggregateType<T>>

    /**
     * Group by Consultant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultantGroupByArgs} args - Group by arguments.
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
      T extends ConsultantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultantGroupByArgs['orderBy'] }
        : { orderBy?: ConsultantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultant model
   */
  readonly fields: ConsultantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends Consultant$TaskArgs<ExtArgs> = {}>(args?: Subset<T, Consultant$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultant model
   */
  interface ConsultantFieldRefs {
    readonly ConsultantID: FieldRef<"Consultant", 'Int'>
    readonly ConsultantFirstName: FieldRef<"Consultant", 'String'>
    readonly ConsultantLastName: FieldRef<"Consultant", 'String'>
    readonly ConsultantRole: FieldRef<"Consultant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Consultant findUnique
   */
  export type ConsultantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * Filter, which Consultant to fetch.
     */
    where: ConsultantWhereUniqueInput
  }

  /**
   * Consultant findUniqueOrThrow
   */
  export type ConsultantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * Filter, which Consultant to fetch.
     */
    where: ConsultantWhereUniqueInput
  }

  /**
   * Consultant findFirst
   */
  export type ConsultantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * Filter, which Consultant to fetch.
     */
    where?: ConsultantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultants to fetch.
     */
    orderBy?: ConsultantOrderByWithRelationInput | ConsultantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultants.
     */
    cursor?: ConsultantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultants.
     */
    distinct?: ConsultantScalarFieldEnum | ConsultantScalarFieldEnum[]
  }

  /**
   * Consultant findFirstOrThrow
   */
  export type ConsultantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * Filter, which Consultant to fetch.
     */
    where?: ConsultantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultants to fetch.
     */
    orderBy?: ConsultantOrderByWithRelationInput | ConsultantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultants.
     */
    cursor?: ConsultantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultants.
     */
    distinct?: ConsultantScalarFieldEnum | ConsultantScalarFieldEnum[]
  }

  /**
   * Consultant findMany
   */
  export type ConsultantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * Filter, which Consultants to fetch.
     */
    where?: ConsultantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultants to fetch.
     */
    orderBy?: ConsultantOrderByWithRelationInput | ConsultantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultants.
     */
    cursor?: ConsultantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultants.
     */
    distinct?: ConsultantScalarFieldEnum | ConsultantScalarFieldEnum[]
  }

  /**
   * Consultant create
   */
  export type ConsultantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultant.
     */
    data: XOR<ConsultantCreateInput, ConsultantUncheckedCreateInput>
  }

  /**
   * Consultant createMany
   */
  export type ConsultantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultants.
     */
    data: ConsultantCreateManyInput | ConsultantCreateManyInput[]
  }

  /**
   * Consultant createManyAndReturn
   */
  export type ConsultantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * The data used to create many Consultants.
     */
    data: ConsultantCreateManyInput | ConsultantCreateManyInput[]
  }

  /**
   * Consultant update
   */
  export type ConsultantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultant.
     */
    data: XOR<ConsultantUpdateInput, ConsultantUncheckedUpdateInput>
    /**
     * Choose, which Consultant to update.
     */
    where: ConsultantWhereUniqueInput
  }

  /**
   * Consultant updateMany
   */
  export type ConsultantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultants.
     */
    data: XOR<ConsultantUpdateManyMutationInput, ConsultantUncheckedUpdateManyInput>
    /**
     * Filter which Consultants to update
     */
    where?: ConsultantWhereInput
    /**
     * Limit how many Consultants to update.
     */
    limit?: number
  }

  /**
   * Consultant updateManyAndReturn
   */
  export type ConsultantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * The data used to update Consultants.
     */
    data: XOR<ConsultantUpdateManyMutationInput, ConsultantUncheckedUpdateManyInput>
    /**
     * Filter which Consultants to update
     */
    where?: ConsultantWhereInput
    /**
     * Limit how many Consultants to update.
     */
    limit?: number
  }

  /**
   * Consultant upsert
   */
  export type ConsultantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultant to update in case it exists.
     */
    where: ConsultantWhereUniqueInput
    /**
     * In case the Consultant found by the `where` argument doesn't exist, create a new Consultant with this data.
     */
    create: XOR<ConsultantCreateInput, ConsultantUncheckedCreateInput>
    /**
     * In case the Consultant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultantUpdateInput, ConsultantUncheckedUpdateInput>
  }

  /**
   * Consultant delete
   */
  export type ConsultantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    /**
     * Filter which Consultant to delete.
     */
    where: ConsultantWhereUniqueInput
  }

  /**
   * Consultant deleteMany
   */
  export type ConsultantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultants to delete
     */
    where?: ConsultantWhereInput
    /**
     * Limit how many Consultants to delete.
     */
    limit?: number
  }

  /**
   * Consultant.Task
   */
  export type Consultant$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Consultant without action
   */
  export type ConsultantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    TaskID: number | null
    UserID: number | null
    PriorityID: number | null
    ConsultantID: number | null
  }

  export type TaskSumAggregateOutputType = {
    TaskID: number | null
    UserID: number | null
    PriorityID: number | null
    ConsultantID: number | null
  }

  export type TaskMinAggregateOutputType = {
    TaskID: number | null
    UserID: number | null
    TaskName: string | null
    DueDate: Date | null
    PriorityID: number | null
    ConsultantID: number | null
    IsCompleted: boolean | null
  }

  export type TaskMaxAggregateOutputType = {
    TaskID: number | null
    UserID: number | null
    TaskName: string | null
    DueDate: Date | null
    PriorityID: number | null
    ConsultantID: number | null
    IsCompleted: boolean | null
  }

  export type TaskCountAggregateOutputType = {
    TaskID: number
    UserID: number
    TaskName: number
    DueDate: number
    PriorityID: number
    ConsultantID: number
    IsCompleted: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    TaskID?: true
    UserID?: true
    PriorityID?: true
    ConsultantID?: true
  }

  export type TaskSumAggregateInputType = {
    TaskID?: true
    UserID?: true
    PriorityID?: true
    ConsultantID?: true
  }

  export type TaskMinAggregateInputType = {
    TaskID?: true
    UserID?: true
    TaskName?: true
    DueDate?: true
    PriorityID?: true
    ConsultantID?: true
    IsCompleted?: true
  }

  export type TaskMaxAggregateInputType = {
    TaskID?: true
    UserID?: true
    TaskName?: true
    DueDate?: true
    PriorityID?: true
    ConsultantID?: true
    IsCompleted?: true
  }

  export type TaskCountAggregateInputType = {
    TaskID?: true
    UserID?: true
    TaskName?: true
    DueDate?: true
    PriorityID?: true
    ConsultantID?: true
    IsCompleted?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    TaskID: number
    UserID: number
    TaskName: string
    DueDate: Date
    PriorityID: number
    ConsultantID: number | null
    IsCompleted: boolean
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TaskID?: boolean
    UserID?: boolean
    TaskName?: boolean
    DueDate?: boolean
    PriorityID?: boolean
    ConsultantID?: boolean
    IsCompleted?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    TaskPriority?: boolean | TaskPriorityDefaultArgs<ExtArgs>
    Consultant?: boolean | Task$ConsultantArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TaskID?: boolean
    UserID?: boolean
    TaskName?: boolean
    DueDate?: boolean
    PriorityID?: boolean
    ConsultantID?: boolean
    IsCompleted?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    TaskPriority?: boolean | TaskPriorityDefaultArgs<ExtArgs>
    Consultant?: boolean | Task$ConsultantArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TaskID?: boolean
    UserID?: boolean
    TaskName?: boolean
    DueDate?: boolean
    PriorityID?: boolean
    ConsultantID?: boolean
    IsCompleted?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    TaskPriority?: boolean | TaskPriorityDefaultArgs<ExtArgs>
    Consultant?: boolean | Task$ConsultantArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    TaskID?: boolean
    UserID?: boolean
    TaskName?: boolean
    DueDate?: boolean
    PriorityID?: boolean
    ConsultantID?: boolean
    IsCompleted?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TaskID" | "UserID" | "TaskName" | "DueDate" | "PriorityID" | "ConsultantID" | "IsCompleted", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    TaskPriority?: boolean | TaskPriorityDefaultArgs<ExtArgs>
    Consultant?: boolean | Task$ConsultantArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    TaskPriority?: boolean | TaskPriorityDefaultArgs<ExtArgs>
    Consultant?: boolean | Task$ConsultantArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    TaskPriority?: boolean | TaskPriorityDefaultArgs<ExtArgs>
    Consultant?: boolean | Task$ConsultantArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      TaskPriority: Prisma.$TaskPriorityPayload<ExtArgs>
      Consultant: Prisma.$ConsultantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      TaskID: number
      UserID: number
      TaskName: string
      DueDate: Date
      PriorityID: number
      ConsultantID: number | null
      IsCompleted: boolean
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `TaskID`
     * const taskWithTaskIDOnly = await prisma.task.findMany({ select: { TaskID: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `TaskID`
     * const taskWithTaskIDOnly = await prisma.task.createManyAndReturn({
     *   select: { TaskID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `TaskID`
     * const taskWithTaskIDOnly = await prisma.task.updateManyAndReturn({
     *   select: { TaskID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TaskPriority<T extends TaskPriorityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskPriorityDefaultArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Consultant<T extends Task$ConsultantArgs<ExtArgs> = {}>(args?: Subset<T, Task$ConsultantArgs<ExtArgs>>): Prisma__ConsultantClient<$Result.GetResult<Prisma.$ConsultantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly TaskID: FieldRef<"Task", 'Int'>
    readonly UserID: FieldRef<"Task", 'Int'>
    readonly TaskName: FieldRef<"Task", 'String'>
    readonly DueDate: FieldRef<"Task", 'DateTime'>
    readonly PriorityID: FieldRef<"Task", 'Int'>
    readonly ConsultantID: FieldRef<"Task", 'Int'>
    readonly IsCompleted: FieldRef<"Task", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.Consultant
   */
  export type Task$ConsultantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultant
     */
    select?: ConsultantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultant
     */
    omit?: ConsultantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultantInclude<ExtArgs> | null
    where?: ConsultantWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskPriority
   */

  export type AggregateTaskPriority = {
    _count: TaskPriorityCountAggregateOutputType | null
    _avg: TaskPriorityAvgAggregateOutputType | null
    _sum: TaskPrioritySumAggregateOutputType | null
    _min: TaskPriorityMinAggregateOutputType | null
    _max: TaskPriorityMaxAggregateOutputType | null
  }

  export type TaskPriorityAvgAggregateOutputType = {
    PriorityID: number | null
  }

  export type TaskPrioritySumAggregateOutputType = {
    PriorityID: number | null
  }

  export type TaskPriorityMinAggregateOutputType = {
    PriorityID: number | null
    PriorityTitle: string | null
  }

  export type TaskPriorityMaxAggregateOutputType = {
    PriorityID: number | null
    PriorityTitle: string | null
  }

  export type TaskPriorityCountAggregateOutputType = {
    PriorityID: number
    PriorityTitle: number
    _all: number
  }


  export type TaskPriorityAvgAggregateInputType = {
    PriorityID?: true
  }

  export type TaskPrioritySumAggregateInputType = {
    PriorityID?: true
  }

  export type TaskPriorityMinAggregateInputType = {
    PriorityID?: true
    PriorityTitle?: true
  }

  export type TaskPriorityMaxAggregateInputType = {
    PriorityID?: true
    PriorityTitle?: true
  }

  export type TaskPriorityCountAggregateInputType = {
    PriorityID?: true
    PriorityTitle?: true
    _all?: true
  }

  export type TaskPriorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskPriority to aggregate.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskPriorities
    **/
    _count?: true | TaskPriorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskPriorityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskPrioritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskPriorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskPriorityMaxAggregateInputType
  }

  export type GetTaskPriorityAggregateType<T extends TaskPriorityAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskPriority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskPriority[P]>
      : GetScalarType<T[P], AggregateTaskPriority[P]>
  }




  export type TaskPriorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskPriorityWhereInput
    orderBy?: TaskPriorityOrderByWithAggregationInput | TaskPriorityOrderByWithAggregationInput[]
    by: TaskPriorityScalarFieldEnum[] | TaskPriorityScalarFieldEnum
    having?: TaskPriorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskPriorityCountAggregateInputType | true
    _avg?: TaskPriorityAvgAggregateInputType
    _sum?: TaskPrioritySumAggregateInputType
    _min?: TaskPriorityMinAggregateInputType
    _max?: TaskPriorityMaxAggregateInputType
  }

  export type TaskPriorityGroupByOutputType = {
    PriorityID: number
    PriorityTitle: string
    _count: TaskPriorityCountAggregateOutputType | null
    _avg: TaskPriorityAvgAggregateOutputType | null
    _sum: TaskPrioritySumAggregateOutputType | null
    _min: TaskPriorityMinAggregateOutputType | null
    _max: TaskPriorityMaxAggregateOutputType | null
  }

  type GetTaskPriorityGroupByPayload<T extends TaskPriorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskPriorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskPriorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskPriorityGroupByOutputType[P]>
            : GetScalarType<T[P], TaskPriorityGroupByOutputType[P]>
        }
      >
    >


  export type TaskPrioritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PriorityID?: boolean
    PriorityTitle?: boolean
    Task?: boolean | TaskPriority$TaskArgs<ExtArgs>
    _count?: boolean | TaskPriorityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskPriority"]>

  export type TaskPrioritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PriorityID?: boolean
    PriorityTitle?: boolean
  }, ExtArgs["result"]["taskPriority"]>

  export type TaskPrioritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PriorityID?: boolean
    PriorityTitle?: boolean
  }, ExtArgs["result"]["taskPriority"]>

  export type TaskPrioritySelectScalar = {
    PriorityID?: boolean
    PriorityTitle?: boolean
  }

  export type TaskPriorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PriorityID" | "PriorityTitle", ExtArgs["result"]["taskPriority"]>
  export type TaskPriorityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | TaskPriority$TaskArgs<ExtArgs>
    _count?: boolean | TaskPriorityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskPriorityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskPriorityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPriorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskPriority"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PriorityID: number
      PriorityTitle: string
    }, ExtArgs["result"]["taskPriority"]>
    composites: {}
  }

  type TaskPriorityGetPayload<S extends boolean | null | undefined | TaskPriorityDefaultArgs> = $Result.GetResult<Prisma.$TaskPriorityPayload, S>

  type TaskPriorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskPriorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskPriorityCountAggregateInputType | true
    }

  export interface TaskPriorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskPriority'], meta: { name: 'TaskPriority' } }
    /**
     * Find zero or one TaskPriority that matches the filter.
     * @param {TaskPriorityFindUniqueArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskPriorityFindUniqueArgs>(args: SelectSubset<T, TaskPriorityFindUniqueArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskPriority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskPriorityFindUniqueOrThrowArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskPriorityFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskPriorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskPriority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityFindFirstArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskPriorityFindFirstArgs>(args?: SelectSubset<T, TaskPriorityFindFirstArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskPriority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityFindFirstOrThrowArgs} args - Arguments to find a TaskPriority
     * @example
     * // Get one TaskPriority
     * const taskPriority = await prisma.taskPriority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskPriorityFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskPriorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskPriorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskPriorities
     * const taskPriorities = await prisma.taskPriority.findMany()
     * 
     * // Get first 10 TaskPriorities
     * const taskPriorities = await prisma.taskPriority.findMany({ take: 10 })
     * 
     * // Only select the `PriorityID`
     * const taskPriorityWithPriorityIDOnly = await prisma.taskPriority.findMany({ select: { PriorityID: true } })
     * 
     */
    findMany<T extends TaskPriorityFindManyArgs>(args?: SelectSubset<T, TaskPriorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskPriority.
     * @param {TaskPriorityCreateArgs} args - Arguments to create a TaskPriority.
     * @example
     * // Create one TaskPriority
     * const TaskPriority = await prisma.taskPriority.create({
     *   data: {
     *     // ... data to create a TaskPriority
     *   }
     * })
     * 
     */
    create<T extends TaskPriorityCreateArgs>(args: SelectSubset<T, TaskPriorityCreateArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskPriorities.
     * @param {TaskPriorityCreateManyArgs} args - Arguments to create many TaskPriorities.
     * @example
     * // Create many TaskPriorities
     * const taskPriority = await prisma.taskPriority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskPriorityCreateManyArgs>(args?: SelectSubset<T, TaskPriorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskPriorities and returns the data saved in the database.
     * @param {TaskPriorityCreateManyAndReturnArgs} args - Arguments to create many TaskPriorities.
     * @example
     * // Create many TaskPriorities
     * const taskPriority = await prisma.taskPriority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskPriorities and only return the `PriorityID`
     * const taskPriorityWithPriorityIDOnly = await prisma.taskPriority.createManyAndReturn({
     *   select: { PriorityID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskPriorityCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskPriorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskPriority.
     * @param {TaskPriorityDeleteArgs} args - Arguments to delete one TaskPriority.
     * @example
     * // Delete one TaskPriority
     * const TaskPriority = await prisma.taskPriority.delete({
     *   where: {
     *     // ... filter to delete one TaskPriority
     *   }
     * })
     * 
     */
    delete<T extends TaskPriorityDeleteArgs>(args: SelectSubset<T, TaskPriorityDeleteArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskPriority.
     * @param {TaskPriorityUpdateArgs} args - Arguments to update one TaskPriority.
     * @example
     * // Update one TaskPriority
     * const taskPriority = await prisma.taskPriority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskPriorityUpdateArgs>(args: SelectSubset<T, TaskPriorityUpdateArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskPriorities.
     * @param {TaskPriorityDeleteManyArgs} args - Arguments to filter TaskPriorities to delete.
     * @example
     * // Delete a few TaskPriorities
     * const { count } = await prisma.taskPriority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskPriorityDeleteManyArgs>(args?: SelectSubset<T, TaskPriorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskPriorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskPriorities
     * const taskPriority = await prisma.taskPriority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskPriorityUpdateManyArgs>(args: SelectSubset<T, TaskPriorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskPriorities and returns the data updated in the database.
     * @param {TaskPriorityUpdateManyAndReturnArgs} args - Arguments to update many TaskPriorities.
     * @example
     * // Update many TaskPriorities
     * const taskPriority = await prisma.taskPriority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskPriorities and only return the `PriorityID`
     * const taskPriorityWithPriorityIDOnly = await prisma.taskPriority.updateManyAndReturn({
     *   select: { PriorityID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskPriorityUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskPriorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskPriority.
     * @param {TaskPriorityUpsertArgs} args - Arguments to update or create a TaskPriority.
     * @example
     * // Update or create a TaskPriority
     * const taskPriority = await prisma.taskPriority.upsert({
     *   create: {
     *     // ... data to create a TaskPriority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskPriority we want to update
     *   }
     * })
     */
    upsert<T extends TaskPriorityUpsertArgs>(args: SelectSubset<T, TaskPriorityUpsertArgs<ExtArgs>>): Prisma__TaskPriorityClient<$Result.GetResult<Prisma.$TaskPriorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskPriorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityCountArgs} args - Arguments to filter TaskPriorities to count.
     * @example
     * // Count the number of TaskPriorities
     * const count = await prisma.taskPriority.count({
     *   where: {
     *     // ... the filter for the TaskPriorities we want to count
     *   }
     * })
    **/
    count<T extends TaskPriorityCountArgs>(
      args?: Subset<T, TaskPriorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskPriorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskPriority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskPriorityAggregateArgs>(args: Subset<T, TaskPriorityAggregateArgs>): Prisma.PrismaPromise<GetTaskPriorityAggregateType<T>>

    /**
     * Group by TaskPriority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskPriorityGroupByArgs} args - Group by arguments.
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
      T extends TaskPriorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskPriorityGroupByArgs['orderBy'] }
        : { orderBy?: TaskPriorityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskPriorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskPriorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskPriority model
   */
  readonly fields: TaskPriorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskPriority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskPriorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends TaskPriority$TaskArgs<ExtArgs> = {}>(args?: Subset<T, TaskPriority$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskPriority model
   */
  interface TaskPriorityFieldRefs {
    readonly PriorityID: FieldRef<"TaskPriority", 'Int'>
    readonly PriorityTitle: FieldRef<"TaskPriority", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskPriority findUnique
   */
  export type TaskPriorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority findUniqueOrThrow
   */
  export type TaskPriorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority findFirst
   */
  export type TaskPriorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskPriorities.
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPriorities.
     */
    distinct?: TaskPriorityScalarFieldEnum | TaskPriorityScalarFieldEnum[]
  }

  /**
   * TaskPriority findFirstOrThrow
   */
  export type TaskPriorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriority to fetch.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskPriorities.
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPriorities.
     */
    distinct?: TaskPriorityScalarFieldEnum | TaskPriorityScalarFieldEnum[]
  }

  /**
   * TaskPriority findMany
   */
  export type TaskPriorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter, which TaskPriorities to fetch.
     */
    where?: TaskPriorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskPriorities to fetch.
     */
    orderBy?: TaskPriorityOrderByWithRelationInput | TaskPriorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskPriorities.
     */
    cursor?: TaskPriorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskPriorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskPriorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskPriorities.
     */
    distinct?: TaskPriorityScalarFieldEnum | TaskPriorityScalarFieldEnum[]
  }

  /**
   * TaskPriority create
   */
  export type TaskPriorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskPriority.
     */
    data: XOR<TaskPriorityCreateInput, TaskPriorityUncheckedCreateInput>
  }

  /**
   * TaskPriority createMany
   */
  export type TaskPriorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskPriorities.
     */
    data: TaskPriorityCreateManyInput | TaskPriorityCreateManyInput[]
  }

  /**
   * TaskPriority createManyAndReturn
   */
  export type TaskPriorityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * The data used to create many TaskPriorities.
     */
    data: TaskPriorityCreateManyInput | TaskPriorityCreateManyInput[]
  }

  /**
   * TaskPriority update
   */
  export type TaskPriorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskPriority.
     */
    data: XOR<TaskPriorityUpdateInput, TaskPriorityUncheckedUpdateInput>
    /**
     * Choose, which TaskPriority to update.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority updateMany
   */
  export type TaskPriorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskPriorities.
     */
    data: XOR<TaskPriorityUpdateManyMutationInput, TaskPriorityUncheckedUpdateManyInput>
    /**
     * Filter which TaskPriorities to update
     */
    where?: TaskPriorityWhereInput
    /**
     * Limit how many TaskPriorities to update.
     */
    limit?: number
  }

  /**
   * TaskPriority updateManyAndReturn
   */
  export type TaskPriorityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * The data used to update TaskPriorities.
     */
    data: XOR<TaskPriorityUpdateManyMutationInput, TaskPriorityUncheckedUpdateManyInput>
    /**
     * Filter which TaskPriorities to update
     */
    where?: TaskPriorityWhereInput
    /**
     * Limit how many TaskPriorities to update.
     */
    limit?: number
  }

  /**
   * TaskPriority upsert
   */
  export type TaskPriorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskPriority to update in case it exists.
     */
    where: TaskPriorityWhereUniqueInput
    /**
     * In case the TaskPriority found by the `where` argument doesn't exist, create a new TaskPriority with this data.
     */
    create: XOR<TaskPriorityCreateInput, TaskPriorityUncheckedCreateInput>
    /**
     * In case the TaskPriority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskPriorityUpdateInput, TaskPriorityUncheckedUpdateInput>
  }

  /**
   * TaskPriority delete
   */
  export type TaskPriorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
    /**
     * Filter which TaskPriority to delete.
     */
    where: TaskPriorityWhereUniqueInput
  }

  /**
   * TaskPriority deleteMany
   */
  export type TaskPriorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskPriorities to delete
     */
    where?: TaskPriorityWhereInput
    /**
     * Limit how many TaskPriorities to delete.
     */
    limit?: number
  }

  /**
   * TaskPriority.Task
   */
  export type TaskPriority$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * TaskPriority without action
   */
  export type TaskPriorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskPriority
     */
    select?: TaskPrioritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskPriority
     */
    omit?: TaskPriorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskPriorityInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    UserID: number | null
    UserRoleID: number | null
  }

  export type UserSumAggregateOutputType = {
    UserID: number | null
    UserRoleID: number | null
  }

  export type UserMinAggregateOutputType = {
    UserID: number | null
    Email: string | null
    UserName: string | null
    UserFirstName: string | null
    UserLastName: string | null
    Password: string | null
    UserRoleID: number | null
  }

  export type UserMaxAggregateOutputType = {
    UserID: number | null
    Email: string | null
    UserName: string | null
    UserFirstName: string | null
    UserLastName: string | null
    Password: string | null
    UserRoleID: number | null
  }

  export type UserCountAggregateOutputType = {
    UserID: number
    Email: number
    UserName: number
    UserFirstName: number
    UserLastName: number
    Password: number
    UserRoleID: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    UserID?: true
    UserRoleID?: true
  }

  export type UserSumAggregateInputType = {
    UserID?: true
    UserRoleID?: true
  }

  export type UserMinAggregateInputType = {
    UserID?: true
    Email?: true
    UserName?: true
    UserFirstName?: true
    UserLastName?: true
    Password?: true
    UserRoleID?: true
  }

  export type UserMaxAggregateInputType = {
    UserID?: true
    Email?: true
    UserName?: true
    UserFirstName?: true
    UserLastName?: true
    Password?: true
    UserRoleID?: true
  }

  export type UserCountAggregateInputType = {
    UserID?: true
    Email?: true
    UserName?: true
    UserFirstName?: true
    UserLastName?: true
    Password?: true
    UserRoleID?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserID: number
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    UserRoleID: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    UserID?: boolean
    Email?: boolean
    UserName?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    Password?: boolean
    UserRoleID?: boolean
    Task?: boolean | User$TaskArgs<ExtArgs>
    UserRole?: boolean | UserRoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Email?: boolean
    UserName?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    Password?: boolean
    UserRoleID?: boolean
    UserRole?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Email?: boolean
    UserName?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    Password?: boolean
    UserRoleID?: boolean
    UserRole?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    UserID?: boolean
    Email?: boolean
    UserName?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    Password?: boolean
    UserRoleID?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "Email" | "UserName" | "UserFirstName" | "UserLastName" | "Password" | "UserRoleID", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | User$TaskArgs<ExtArgs>
    UserRole?: boolean | UserRoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>[]
      UserRole: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      Email: string
      UserName: string
      UserFirstName: string
      UserLastName: string
      Password: string
      UserRoleID: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({
     *   select: { UserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.updateManyAndReturn({
     *   select: { UserID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends User$TaskArgs<ExtArgs> = {}>(args?: Subset<T, User$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserRole<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly UserID: FieldRef<"User", 'Int'>
    readonly Email: FieldRef<"User", 'String'>
    readonly UserName: FieldRef<"User", 'String'>
    readonly UserFirstName: FieldRef<"User", 'String'>
    readonly UserLastName: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
    readonly UserRoleID: FieldRef<"User", 'Int'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Task
   */
  export type User$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    UserRoleID: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    UserRoleID: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    UserRoleID: number | null
    UserRoleName: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    UserRoleID: number | null
    UserRoleName: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    UserRoleID: number
    UserRoleName: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    UserRoleID?: true
  }

  export type UserRoleSumAggregateInputType = {
    UserRoleID?: true
  }

  export type UserRoleMinAggregateInputType = {
    UserRoleID?: true
    UserRoleName?: true
  }

  export type UserRoleMaxAggregateInputType = {
    UserRoleID?: true
    UserRoleName?: true
  }

  export type UserRoleCountAggregateInputType = {
    UserRoleID?: true
    UserRoleName?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    UserRoleID: number
    UserRoleName: string
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserRoleID?: boolean
    UserRoleName?: boolean
    User?: boolean | UserRole$UserArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserRoleID?: boolean
    UserRoleName?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserRoleID?: boolean
    UserRoleName?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    UserRoleID?: boolean
    UserRoleName?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserRoleID" | "UserRoleName", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserRole$UserArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserRoleID: number
      UserRoleName: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `UserRoleID`
     * const userRoleWithUserRoleIDOnly = await prisma.userRole.findMany({ select: { UserRoleID: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `UserRoleID`
     * const userRoleWithUserRoleIDOnly = await prisma.userRole.createManyAndReturn({
     *   select: { UserRoleID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `UserRoleID`
     * const userRoleWithUserRoleIDOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { UserRoleID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserRole$UserArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly UserRoleID: FieldRef<"UserRole", 'Int'>
    readonly UserRoleName: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.User
   */
  export type UserRole$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConsultantScalarFieldEnum: {
    ConsultantID: 'ConsultantID',
    ConsultantFirstName: 'ConsultantFirstName',
    ConsultantLastName: 'ConsultantLastName',
    ConsultantRole: 'ConsultantRole'
  };

  export type ConsultantScalarFieldEnum = (typeof ConsultantScalarFieldEnum)[keyof typeof ConsultantScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    TaskID: 'TaskID',
    UserID: 'UserID',
    TaskName: 'TaskName',
    DueDate: 'DueDate',
    PriorityID: 'PriorityID',
    ConsultantID: 'ConsultantID',
    IsCompleted: 'IsCompleted'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskPriorityScalarFieldEnum: {
    PriorityID: 'PriorityID',
    PriorityTitle: 'PriorityTitle'
  };

  export type TaskPriorityScalarFieldEnum = (typeof TaskPriorityScalarFieldEnum)[keyof typeof TaskPriorityScalarFieldEnum]


  export const UserScalarFieldEnum: {
    UserID: 'UserID',
    Email: 'Email',
    UserName: 'UserName',
    UserFirstName: 'UserFirstName',
    UserLastName: 'UserLastName',
    Password: 'Password',
    UserRoleID: 'UserRoleID'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    UserRoleID: 'UserRoleID',
    UserRoleName: 'UserRoleName'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ConsultantWhereInput = {
    AND?: ConsultantWhereInput | ConsultantWhereInput[]
    OR?: ConsultantWhereInput[]
    NOT?: ConsultantWhereInput | ConsultantWhereInput[]
    ConsultantID?: IntFilter<"Consultant"> | number
    ConsultantFirstName?: StringFilter<"Consultant"> | string
    ConsultantLastName?: StringFilter<"Consultant"> | string
    ConsultantRole?: StringFilter<"Consultant"> | string
    Task?: TaskListRelationFilter
  }

  export type ConsultantOrderByWithRelationInput = {
    ConsultantID?: SortOrder
    ConsultantFirstName?: SortOrder
    ConsultantLastName?: SortOrder
    ConsultantRole?: SortOrder
    Task?: TaskOrderByRelationAggregateInput
  }

  export type ConsultantWhereUniqueInput = Prisma.AtLeast<{
    ConsultantID?: number
    AND?: ConsultantWhereInput | ConsultantWhereInput[]
    OR?: ConsultantWhereInput[]
    NOT?: ConsultantWhereInput | ConsultantWhereInput[]
    ConsultantFirstName?: StringFilter<"Consultant"> | string
    ConsultantLastName?: StringFilter<"Consultant"> | string
    ConsultantRole?: StringFilter<"Consultant"> | string
    Task?: TaskListRelationFilter
  }, "ConsultantID">

  export type ConsultantOrderByWithAggregationInput = {
    ConsultantID?: SortOrder
    ConsultantFirstName?: SortOrder
    ConsultantLastName?: SortOrder
    ConsultantRole?: SortOrder
    _count?: ConsultantCountOrderByAggregateInput
    _avg?: ConsultantAvgOrderByAggregateInput
    _max?: ConsultantMaxOrderByAggregateInput
    _min?: ConsultantMinOrderByAggregateInput
    _sum?: ConsultantSumOrderByAggregateInput
  }

  export type ConsultantScalarWhereWithAggregatesInput = {
    AND?: ConsultantScalarWhereWithAggregatesInput | ConsultantScalarWhereWithAggregatesInput[]
    OR?: ConsultantScalarWhereWithAggregatesInput[]
    NOT?: ConsultantScalarWhereWithAggregatesInput | ConsultantScalarWhereWithAggregatesInput[]
    ConsultantID?: IntWithAggregatesFilter<"Consultant"> | number
    ConsultantFirstName?: StringWithAggregatesFilter<"Consultant"> | string
    ConsultantLastName?: StringWithAggregatesFilter<"Consultant"> | string
    ConsultantRole?: StringWithAggregatesFilter<"Consultant"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    TaskID?: IntFilter<"Task"> | number
    UserID?: IntFilter<"Task"> | number
    TaskName?: StringFilter<"Task"> | string
    DueDate?: DateTimeFilter<"Task"> | Date | string
    PriorityID?: IntFilter<"Task"> | number
    ConsultantID?: IntNullableFilter<"Task"> | number | null
    IsCompleted?: BoolFilter<"Task"> | boolean
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    TaskPriority?: XOR<TaskPriorityScalarRelationFilter, TaskPriorityWhereInput>
    Consultant?: XOR<ConsultantNullableScalarRelationFilter, ConsultantWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    TaskName?: SortOrder
    DueDate?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrderInput | SortOrder
    IsCompleted?: SortOrder
    User?: UserOrderByWithRelationInput
    TaskPriority?: TaskPriorityOrderByWithRelationInput
    Consultant?: ConsultantOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    TaskID?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    UserID?: IntFilter<"Task"> | number
    TaskName?: StringFilter<"Task"> | string
    DueDate?: DateTimeFilter<"Task"> | Date | string
    PriorityID?: IntFilter<"Task"> | number
    ConsultantID?: IntNullableFilter<"Task"> | number | null
    IsCompleted?: BoolFilter<"Task"> | boolean
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    TaskPriority?: XOR<TaskPriorityScalarRelationFilter, TaskPriorityWhereInput>
    Consultant?: XOR<ConsultantNullableScalarRelationFilter, ConsultantWhereInput> | null
  }, "TaskID">

  export type TaskOrderByWithAggregationInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    TaskName?: SortOrder
    DueDate?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrderInput | SortOrder
    IsCompleted?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    TaskID?: IntWithAggregatesFilter<"Task"> | number
    UserID?: IntWithAggregatesFilter<"Task"> | number
    TaskName?: StringWithAggregatesFilter<"Task"> | string
    DueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    PriorityID?: IntWithAggregatesFilter<"Task"> | number
    ConsultantID?: IntNullableWithAggregatesFilter<"Task"> | number | null
    IsCompleted?: BoolWithAggregatesFilter<"Task"> | boolean
  }

  export type TaskPriorityWhereInput = {
    AND?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    OR?: TaskPriorityWhereInput[]
    NOT?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    PriorityID?: IntFilter<"TaskPriority"> | number
    PriorityTitle?: StringFilter<"TaskPriority"> | string
    Task?: TaskListRelationFilter
  }

  export type TaskPriorityOrderByWithRelationInput = {
    PriorityID?: SortOrder
    PriorityTitle?: SortOrder
    Task?: TaskOrderByRelationAggregateInput
  }

  export type TaskPriorityWhereUniqueInput = Prisma.AtLeast<{
    PriorityID?: number
    PriorityTitle?: string
    AND?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    OR?: TaskPriorityWhereInput[]
    NOT?: TaskPriorityWhereInput | TaskPriorityWhereInput[]
    Task?: TaskListRelationFilter
  }, "PriorityID" | "PriorityTitle">

  export type TaskPriorityOrderByWithAggregationInput = {
    PriorityID?: SortOrder
    PriorityTitle?: SortOrder
    _count?: TaskPriorityCountOrderByAggregateInput
    _avg?: TaskPriorityAvgOrderByAggregateInput
    _max?: TaskPriorityMaxOrderByAggregateInput
    _min?: TaskPriorityMinOrderByAggregateInput
    _sum?: TaskPrioritySumOrderByAggregateInput
  }

  export type TaskPriorityScalarWhereWithAggregatesInput = {
    AND?: TaskPriorityScalarWhereWithAggregatesInput | TaskPriorityScalarWhereWithAggregatesInput[]
    OR?: TaskPriorityScalarWhereWithAggregatesInput[]
    NOT?: TaskPriorityScalarWhereWithAggregatesInput | TaskPriorityScalarWhereWithAggregatesInput[]
    PriorityID?: IntWithAggregatesFilter<"TaskPriority"> | number
    PriorityTitle?: StringWithAggregatesFilter<"TaskPriority"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserID?: IntFilter<"User"> | number
    Email?: StringFilter<"User"> | string
    UserName?: StringFilter<"User"> | string
    UserFirstName?: StringFilter<"User"> | string
    UserLastName?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    UserRoleID?: IntFilter<"User"> | number
    Task?: TaskListRelationFilter
    UserRole?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    UserID?: SortOrder
    Email?: SortOrder
    UserName?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    Password?: SortOrder
    UserRoleID?: SortOrder
    Task?: TaskOrderByRelationAggregateInput
    UserRole?: UserRoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    UserName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Email?: StringFilter<"User"> | string
    UserFirstName?: StringFilter<"User"> | string
    UserLastName?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    UserRoleID?: IntFilter<"User"> | number
    Task?: TaskListRelationFilter
    UserRole?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "UserID" | "UserName">

  export type UserOrderByWithAggregationInput = {
    UserID?: SortOrder
    Email?: SortOrder
    UserName?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    Password?: SortOrder
    UserRoleID?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"User"> | number
    Email?: StringWithAggregatesFilter<"User"> | string
    UserName?: StringWithAggregatesFilter<"User"> | string
    UserFirstName?: StringWithAggregatesFilter<"User"> | string
    UserLastName?: StringWithAggregatesFilter<"User"> | string
    Password?: StringWithAggregatesFilter<"User"> | string
    UserRoleID?: IntWithAggregatesFilter<"User"> | number
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    UserRoleID?: IntFilter<"UserRole"> | number
    UserRoleName?: StringFilter<"UserRole"> | string
    User?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    UserRoleID?: SortOrder
    UserRoleName?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    UserRoleID?: number
    UserRoleName?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    User?: UserListRelationFilter
  }, "UserRoleID" | "UserRoleName">

  export type UserRoleOrderByWithAggregationInput = {
    UserRoleID?: SortOrder
    UserRoleName?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    UserRoleID?: IntWithAggregatesFilter<"UserRole"> | number
    UserRoleName?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type ConsultantCreateInput = {
    ConsultantFirstName: string
    ConsultantLastName: string
    ConsultantRole: string
    Task?: TaskCreateNestedManyWithoutConsultantInput
  }

  export type ConsultantUncheckedCreateInput = {
    ConsultantID?: number
    ConsultantFirstName: string
    ConsultantLastName: string
    ConsultantRole: string
    Task?: TaskUncheckedCreateNestedManyWithoutConsultantInput
  }

  export type ConsultantUpdateInput = {
    ConsultantFirstName?: StringFieldUpdateOperationsInput | string
    ConsultantLastName?: StringFieldUpdateOperationsInput | string
    ConsultantRole?: StringFieldUpdateOperationsInput | string
    Task?: TaskUpdateManyWithoutConsultantNestedInput
  }

  export type ConsultantUncheckedUpdateInput = {
    ConsultantID?: IntFieldUpdateOperationsInput | number
    ConsultantFirstName?: StringFieldUpdateOperationsInput | string
    ConsultantLastName?: StringFieldUpdateOperationsInput | string
    ConsultantRole?: StringFieldUpdateOperationsInput | string
    Task?: TaskUncheckedUpdateManyWithoutConsultantNestedInput
  }

  export type ConsultantCreateManyInput = {
    ConsultantID?: number
    ConsultantFirstName: string
    ConsultantLastName: string
    ConsultantRole: string
  }

  export type ConsultantUpdateManyMutationInput = {
    ConsultantFirstName?: StringFieldUpdateOperationsInput | string
    ConsultantLastName?: StringFieldUpdateOperationsInput | string
    ConsultantRole?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultantUncheckedUpdateManyInput = {
    ConsultantID?: IntFieldUpdateOperationsInput | number
    ConsultantFirstName?: StringFieldUpdateOperationsInput | string
    ConsultantLastName?: StringFieldUpdateOperationsInput | string
    ConsultantRole?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    TaskName: string
    DueDate: Date | string
    IsCompleted: boolean
    User: UserCreateNestedOneWithoutTaskInput
    TaskPriority: TaskPriorityCreateNestedOneWithoutTaskInput
    Consultant?: ConsultantCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    TaskID?: number
    UserID: number
    TaskName: string
    DueDate: Date | string
    PriorityID: number
    ConsultantID?: number | null
    IsCompleted: boolean
  }

  export type TaskUpdateInput = {
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutTaskNestedInput
    TaskPriority?: TaskPriorityUpdateOneRequiredWithoutTaskNestedInput
    Consultant?: ConsultantUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PriorityID?: IntFieldUpdateOperationsInput | number
    ConsultantID?: NullableIntFieldUpdateOperationsInput | number | null
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateManyInput = {
    TaskID?: number
    UserID: number
    TaskName: string
    DueDate: Date | string
    PriorityID: number
    ConsultantID?: number | null
    IsCompleted: boolean
  }

  export type TaskUpdateManyMutationInput = {
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PriorityID?: IntFieldUpdateOperationsInput | number
    ConsultantID?: NullableIntFieldUpdateOperationsInput | number | null
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskPriorityCreateInput = {
    PriorityTitle: string
    Task?: TaskCreateNestedManyWithoutTaskPriorityInput
  }

  export type TaskPriorityUncheckedCreateInput = {
    PriorityID?: number
    PriorityTitle: string
    Task?: TaskUncheckedCreateNestedManyWithoutTaskPriorityInput
  }

  export type TaskPriorityUpdateInput = {
    PriorityTitle?: StringFieldUpdateOperationsInput | string
    Task?: TaskUpdateManyWithoutTaskPriorityNestedInput
  }

  export type TaskPriorityUncheckedUpdateInput = {
    PriorityID?: IntFieldUpdateOperationsInput | number
    PriorityTitle?: StringFieldUpdateOperationsInput | string
    Task?: TaskUncheckedUpdateManyWithoutTaskPriorityNestedInput
  }

  export type TaskPriorityCreateManyInput = {
    PriorityID?: number
    PriorityTitle: string
  }

  export type TaskPriorityUpdateManyMutationInput = {
    PriorityTitle?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPriorityUncheckedUpdateManyInput = {
    PriorityID?: IntFieldUpdateOperationsInput | number
    PriorityTitle?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    Task?: TaskCreateNestedManyWithoutUserInput
    UserRole: UserRoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    UserID?: number
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    UserRoleID: number
    Task?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Task?: TaskUpdateManyWithoutUserNestedInput
    UserRole?: UserRoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    UserRoleID?: IntFieldUpdateOperationsInput | number
    Task?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    UserID?: number
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    UserRoleID: number
  }

  export type UserUpdateManyMutationInput = {
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    UserRoleID?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateInput = {
    UserRoleName: string
    User?: UserCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    UserRoleID?: number
    UserRoleName: string
    User?: UserUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUpdateInput = {
    UserRoleName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    UserRoleID?: IntFieldUpdateOperationsInput | number
    UserRoleName?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    UserRoleID?: number
    UserRoleName: string
  }

  export type UserRoleUpdateManyMutationInput = {
    UserRoleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    UserRoleID?: IntFieldUpdateOperationsInput | number
    UserRoleName?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultantCountOrderByAggregateInput = {
    ConsultantID?: SortOrder
    ConsultantFirstName?: SortOrder
    ConsultantLastName?: SortOrder
    ConsultantRole?: SortOrder
  }

  export type ConsultantAvgOrderByAggregateInput = {
    ConsultantID?: SortOrder
  }

  export type ConsultantMaxOrderByAggregateInput = {
    ConsultantID?: SortOrder
    ConsultantFirstName?: SortOrder
    ConsultantLastName?: SortOrder
    ConsultantRole?: SortOrder
  }

  export type ConsultantMinOrderByAggregateInput = {
    ConsultantID?: SortOrder
    ConsultantFirstName?: SortOrder
    ConsultantLastName?: SortOrder
    ConsultantRole?: SortOrder
  }

  export type ConsultantSumOrderByAggregateInput = {
    ConsultantID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskPriorityScalarRelationFilter = {
    is?: TaskPriorityWhereInput
    isNot?: TaskPriorityWhereInput
  }

  export type ConsultantNullableScalarRelationFilter = {
    is?: ConsultantWhereInput | null
    isNot?: ConsultantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskCountOrderByAggregateInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    TaskName?: SortOrder
    DueDate?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrder
    IsCompleted?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    TaskName?: SortOrder
    DueDate?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrder
    IsCompleted?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    TaskName?: SortOrder
    DueDate?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrder
    IsCompleted?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    TaskID?: SortOrder
    UserID?: SortOrder
    PriorityID?: SortOrder
    ConsultantID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskPriorityCountOrderByAggregateInput = {
    PriorityID?: SortOrder
    PriorityTitle?: SortOrder
  }

  export type TaskPriorityAvgOrderByAggregateInput = {
    PriorityID?: SortOrder
  }

  export type TaskPriorityMaxOrderByAggregateInput = {
    PriorityID?: SortOrder
    PriorityTitle?: SortOrder
  }

  export type TaskPriorityMinOrderByAggregateInput = {
    PriorityID?: SortOrder
    PriorityTitle?: SortOrder
  }

  export type TaskPrioritySumOrderByAggregateInput = {
    PriorityID?: SortOrder
  }

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    UserID?: SortOrder
    Email?: SortOrder
    UserName?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    Password?: SortOrder
    UserRoleID?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    UserID?: SortOrder
    UserRoleID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserID?: SortOrder
    Email?: SortOrder
    UserName?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    Password?: SortOrder
    UserRoleID?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserID?: SortOrder
    Email?: SortOrder
    UserName?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    Password?: SortOrder
    UserRoleID?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    UserID?: SortOrder
    UserRoleID?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    UserRoleID?: SortOrder
    UserRoleName?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    UserRoleID?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    UserRoleID?: SortOrder
    UserRoleName?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    UserRoleID?: SortOrder
    UserRoleName?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    UserRoleID?: SortOrder
  }

  export type TaskCreateNestedManyWithoutConsultantInput = {
    create?: XOR<TaskCreateWithoutConsultantInput, TaskUncheckedCreateWithoutConsultantInput> | TaskCreateWithoutConsultantInput[] | TaskUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutConsultantInput | TaskCreateOrConnectWithoutConsultantInput[]
    createMany?: TaskCreateManyConsultantInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutConsultantInput = {
    create?: XOR<TaskCreateWithoutConsultantInput, TaskUncheckedCreateWithoutConsultantInput> | TaskCreateWithoutConsultantInput[] | TaskUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutConsultantInput | TaskCreateOrConnectWithoutConsultantInput[]
    createMany?: TaskCreateManyConsultantInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TaskUpdateManyWithoutConsultantNestedInput = {
    create?: XOR<TaskCreateWithoutConsultantInput, TaskUncheckedCreateWithoutConsultantInput> | TaskCreateWithoutConsultantInput[] | TaskUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutConsultantInput | TaskCreateOrConnectWithoutConsultantInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutConsultantInput | TaskUpsertWithWhereUniqueWithoutConsultantInput[]
    createMany?: TaskCreateManyConsultantInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutConsultantInput | TaskUpdateWithWhereUniqueWithoutConsultantInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutConsultantInput | TaskUpdateManyWithWhereWithoutConsultantInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutConsultantNestedInput = {
    create?: XOR<TaskCreateWithoutConsultantInput, TaskUncheckedCreateWithoutConsultantInput> | TaskCreateWithoutConsultantInput[] | TaskUncheckedCreateWithoutConsultantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutConsultantInput | TaskCreateOrConnectWithoutConsultantInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutConsultantInput | TaskUpsertWithWhereUniqueWithoutConsultantInput[]
    createMany?: TaskCreateManyConsultantInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutConsultantInput | TaskUpdateWithWhereUniqueWithoutConsultantInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutConsultantInput | TaskUpdateManyWithWhereWithoutConsultantInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTaskInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    connect?: UserWhereUniqueInput
  }

  export type TaskPriorityCreateNestedOneWithoutTaskInput = {
    create?: XOR<TaskPriorityCreateWithoutTaskInput, TaskPriorityUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TaskPriorityCreateOrConnectWithoutTaskInput
    connect?: TaskPriorityWhereUniqueInput
  }

  export type ConsultantCreateNestedOneWithoutTaskInput = {
    create?: XOR<ConsultantCreateWithoutTaskInput, ConsultantUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ConsultantCreateOrConnectWithoutTaskInput
    connect?: ConsultantWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    upsert?: UserUpsertWithoutTaskInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskInput, UserUpdateWithoutTaskInput>, UserUncheckedUpdateWithoutTaskInput>
  }

  export type TaskPriorityUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<TaskPriorityCreateWithoutTaskInput, TaskPriorityUncheckedCreateWithoutTaskInput>
    connectOrCreate?: TaskPriorityCreateOrConnectWithoutTaskInput
    upsert?: TaskPriorityUpsertWithoutTaskInput
    connect?: TaskPriorityWhereUniqueInput
    update?: XOR<XOR<TaskPriorityUpdateToOneWithWhereWithoutTaskInput, TaskPriorityUpdateWithoutTaskInput>, TaskPriorityUncheckedUpdateWithoutTaskInput>
  }

  export type ConsultantUpdateOneWithoutTaskNestedInput = {
    create?: XOR<ConsultantCreateWithoutTaskInput, ConsultantUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ConsultantCreateOrConnectWithoutTaskInput
    upsert?: ConsultantUpsertWithoutTaskInput
    disconnect?: ConsultantWhereInput | boolean
    delete?: ConsultantWhereInput | boolean
    connect?: ConsultantWhereUniqueInput
    update?: XOR<XOR<ConsultantUpdateToOneWithWhereWithoutTaskInput, ConsultantUpdateWithoutTaskInput>, ConsultantUncheckedUpdateWithoutTaskInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskCreateNestedManyWithoutTaskPriorityInput = {
    create?: XOR<TaskCreateWithoutTaskPriorityInput, TaskUncheckedCreateWithoutTaskPriorityInput> | TaskCreateWithoutTaskPriorityInput[] | TaskUncheckedCreateWithoutTaskPriorityInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPriorityInput | TaskCreateOrConnectWithoutTaskPriorityInput[]
    createMany?: TaskCreateManyTaskPriorityInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTaskPriorityInput = {
    create?: XOR<TaskCreateWithoutTaskPriorityInput, TaskUncheckedCreateWithoutTaskPriorityInput> | TaskCreateWithoutTaskPriorityInput[] | TaskUncheckedCreateWithoutTaskPriorityInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPriorityInput | TaskCreateOrConnectWithoutTaskPriorityInput[]
    createMany?: TaskCreateManyTaskPriorityInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutTaskPriorityNestedInput = {
    create?: XOR<TaskCreateWithoutTaskPriorityInput, TaskUncheckedCreateWithoutTaskPriorityInput> | TaskCreateWithoutTaskPriorityInput[] | TaskUncheckedCreateWithoutTaskPriorityInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPriorityInput | TaskCreateOrConnectWithoutTaskPriorityInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskPriorityInput | TaskUpsertWithWhereUniqueWithoutTaskPriorityInput[]
    createMany?: TaskCreateManyTaskPriorityInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskPriorityInput | TaskUpdateWithWhereUniqueWithoutTaskPriorityInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskPriorityInput | TaskUpdateManyWithWhereWithoutTaskPriorityInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTaskPriorityNestedInput = {
    create?: XOR<TaskCreateWithoutTaskPriorityInput, TaskUncheckedCreateWithoutTaskPriorityInput> | TaskCreateWithoutTaskPriorityInput[] | TaskUncheckedCreateWithoutTaskPriorityInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTaskPriorityInput | TaskCreateOrConnectWithoutTaskPriorityInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTaskPriorityInput | TaskUpsertWithWhereUniqueWithoutTaskPriorityInput[]
    createMany?: TaskCreateManyTaskPriorityInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTaskPriorityInput | TaskUpdateWithWhereUniqueWithoutTaskPriorityInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTaskPriorityInput | TaskUpdateManyWithWhereWithoutTaskPriorityInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserRoleCreateNestedOneWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput
    connect?: UserRoleWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserRoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput
    upsert?: UserRoleUpsertWithoutUserInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUserInput, UserRoleUpdateWithoutUserInput>, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskCreateWithoutConsultantInput = {
    TaskName: string
    DueDate: Date | string
    IsCompleted: boolean
    User: UserCreateNestedOneWithoutTaskInput
    TaskPriority: TaskPriorityCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutConsultantInput = {
    TaskID?: number
    UserID: number
    TaskName: string
    DueDate: Date | string
    PriorityID: number
    IsCompleted: boolean
  }

  export type TaskCreateOrConnectWithoutConsultantInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutConsultantInput, TaskUncheckedCreateWithoutConsultantInput>
  }

  export type TaskCreateManyConsultantInputEnvelope = {
    data: TaskCreateManyConsultantInput | TaskCreateManyConsultantInput[]
  }

  export type TaskUpsertWithWhereUniqueWithoutConsultantInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutConsultantInput, TaskUncheckedUpdateWithoutConsultantInput>
    create: XOR<TaskCreateWithoutConsultantInput, TaskUncheckedCreateWithoutConsultantInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutConsultantInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutConsultantInput, TaskUncheckedUpdateWithoutConsultantInput>
  }

  export type TaskUpdateManyWithWhereWithoutConsultantInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutConsultantInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    TaskID?: IntFilter<"Task"> | number
    UserID?: IntFilter<"Task"> | number
    TaskName?: StringFilter<"Task"> | string
    DueDate?: DateTimeFilter<"Task"> | Date | string
    PriorityID?: IntFilter<"Task"> | number
    ConsultantID?: IntNullableFilter<"Task"> | number | null
    IsCompleted?: BoolFilter<"Task"> | boolean
  }

  export type UserCreateWithoutTaskInput = {
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    UserRole: UserRoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskInput = {
    UserID?: number
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    UserRoleID: number
  }

  export type UserCreateOrConnectWithoutTaskInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
  }

  export type TaskPriorityCreateWithoutTaskInput = {
    PriorityTitle: string
  }

  export type TaskPriorityUncheckedCreateWithoutTaskInput = {
    PriorityID?: number
    PriorityTitle: string
  }

  export type TaskPriorityCreateOrConnectWithoutTaskInput = {
    where: TaskPriorityWhereUniqueInput
    create: XOR<TaskPriorityCreateWithoutTaskInput, TaskPriorityUncheckedCreateWithoutTaskInput>
  }

  export type ConsultantCreateWithoutTaskInput = {
    ConsultantFirstName: string
    ConsultantLastName: string
    ConsultantRole: string
  }

  export type ConsultantUncheckedCreateWithoutTaskInput = {
    ConsultantID?: number
    ConsultantFirstName: string
    ConsultantLastName: string
    ConsultantRole: string
  }

  export type ConsultantCreateOrConnectWithoutTaskInput = {
    where: ConsultantWhereUniqueInput
    create: XOR<ConsultantCreateWithoutTaskInput, ConsultantUncheckedCreateWithoutTaskInput>
  }

  export type UserUpsertWithoutTaskInput = {
    update: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateWithoutTaskInput = {
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    UserRole?: UserRoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    UserRoleID?: IntFieldUpdateOperationsInput | number
  }

  export type TaskPriorityUpsertWithoutTaskInput = {
    update: XOR<TaskPriorityUpdateWithoutTaskInput, TaskPriorityUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskPriorityCreateWithoutTaskInput, TaskPriorityUncheckedCreateWithoutTaskInput>
    where?: TaskPriorityWhereInput
  }

  export type TaskPriorityUpdateToOneWithWhereWithoutTaskInput = {
    where?: TaskPriorityWhereInput
    data: XOR<TaskPriorityUpdateWithoutTaskInput, TaskPriorityUncheckedUpdateWithoutTaskInput>
  }

  export type TaskPriorityUpdateWithoutTaskInput = {
    PriorityTitle?: StringFieldUpdateOperationsInput | string
  }

  export type TaskPriorityUncheckedUpdateWithoutTaskInput = {
    PriorityID?: IntFieldUpdateOperationsInput | number
    PriorityTitle?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultantUpsertWithoutTaskInput = {
    update: XOR<ConsultantUpdateWithoutTaskInput, ConsultantUncheckedUpdateWithoutTaskInput>
    create: XOR<ConsultantCreateWithoutTaskInput, ConsultantUncheckedCreateWithoutTaskInput>
    where?: ConsultantWhereInput
  }

  export type ConsultantUpdateToOneWithWhereWithoutTaskInput = {
    where?: ConsultantWhereInput
    data: XOR<ConsultantUpdateWithoutTaskInput, ConsultantUncheckedUpdateWithoutTaskInput>
  }

  export type ConsultantUpdateWithoutTaskInput = {
    ConsultantFirstName?: StringFieldUpdateOperationsInput | string
    ConsultantLastName?: StringFieldUpdateOperationsInput | string
    ConsultantRole?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultantUncheckedUpdateWithoutTaskInput = {
    ConsultantID?: IntFieldUpdateOperationsInput | number
    ConsultantFirstName?: StringFieldUpdateOperationsInput | string
    ConsultantLastName?: StringFieldUpdateOperationsInput | string
    ConsultantRole?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateWithoutTaskPriorityInput = {
    TaskName: string
    DueDate: Date | string
    IsCompleted: boolean
    User: UserCreateNestedOneWithoutTaskInput
    Consultant?: ConsultantCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTaskPriorityInput = {
    TaskID?: number
    UserID: number
    TaskName: string
    DueDate: Date | string
    ConsultantID?: number | null
    IsCompleted: boolean
  }

  export type TaskCreateOrConnectWithoutTaskPriorityInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskPriorityInput, TaskUncheckedCreateWithoutTaskPriorityInput>
  }

  export type TaskCreateManyTaskPriorityInputEnvelope = {
    data: TaskCreateManyTaskPriorityInput | TaskCreateManyTaskPriorityInput[]
  }

  export type TaskUpsertWithWhereUniqueWithoutTaskPriorityInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTaskPriorityInput, TaskUncheckedUpdateWithoutTaskPriorityInput>
    create: XOR<TaskCreateWithoutTaskPriorityInput, TaskUncheckedCreateWithoutTaskPriorityInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTaskPriorityInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTaskPriorityInput, TaskUncheckedUpdateWithoutTaskPriorityInput>
  }

  export type TaskUpdateManyWithWhereWithoutTaskPriorityInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTaskPriorityInput>
  }

  export type TaskCreateWithoutUserInput = {
    TaskName: string
    DueDate: Date | string
    IsCompleted: boolean
    TaskPriority: TaskPriorityCreateNestedOneWithoutTaskInput
    Consultant?: ConsultantCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    TaskID?: number
    TaskName: string
    DueDate: Date | string
    PriorityID: number
    ConsultantID?: number | null
    IsCompleted: boolean
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
  }

  export type UserRoleCreateWithoutUserInput = {
    UserRoleName: string
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    UserRoleID?: number
    UserRoleName: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleUpsertWithoutUserInput = {
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUserInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateWithoutUserInput = {
    UserRoleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    UserRoleID?: IntFieldUpdateOperationsInput | number
    UserRoleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUserRoleInput = {
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    Task?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    UserID?: number
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
    Task?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserCreateManyUserRoleInputEnvelope = {
    data: UserCreateManyUserRoleInput | UserCreateManyUserRoleInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutUserRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    UserID?: IntFilter<"User"> | number
    Email?: StringFilter<"User"> | string
    UserName?: StringFilter<"User"> | string
    UserFirstName?: StringFilter<"User"> | string
    UserLastName?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    UserRoleID?: IntFilter<"User"> | number
  }

  export type TaskCreateManyConsultantInput = {
    TaskID?: number
    UserID: number
    TaskName: string
    DueDate: Date | string
    PriorityID: number
    IsCompleted: boolean
  }

  export type TaskUpdateWithoutConsultantInput = {
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutTaskNestedInput
    TaskPriority?: TaskPriorityUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutConsultantInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PriorityID?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyWithoutConsultantInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PriorityID?: IntFieldUpdateOperationsInput | number
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateManyTaskPriorityInput = {
    TaskID?: number
    UserID: number
    TaskName: string
    DueDate: Date | string
    ConsultantID?: number | null
    IsCompleted: boolean
  }

  export type TaskUpdateWithoutTaskPriorityInput = {
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutTaskNestedInput
    Consultant?: ConsultantUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskPriorityInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ConsultantID?: NullableIntFieldUpdateOperationsInput | number | null
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyWithoutTaskPriorityInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    UserID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ConsultantID?: NullableIntFieldUpdateOperationsInput | number | null
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateManyUserInput = {
    TaskID?: number
    TaskName: string
    DueDate: Date | string
    PriorityID: number
    ConsultantID?: number | null
    IsCompleted: boolean
  }

  export type TaskUpdateWithoutUserInput = {
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
    TaskPriority?: TaskPriorityUpdateOneRequiredWithoutTaskNestedInput
    Consultant?: ConsultantUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PriorityID?: IntFieldUpdateOperationsInput | number
    ConsultantID?: NullableIntFieldUpdateOperationsInput | number | null
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    TaskID?: IntFieldUpdateOperationsInput | number
    TaskName?: StringFieldUpdateOperationsInput | string
    DueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PriorityID?: IntFieldUpdateOperationsInput | number
    ConsultantID?: NullableIntFieldUpdateOperationsInput | number | null
    IsCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyUserRoleInput = {
    UserID?: number
    Email: string
    UserName: string
    UserFirstName: string
    UserLastName: string
    Password: string
  }

  export type UserUpdateWithoutUserRoleInput = {
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Task?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Task?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserRoleInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Email?: StringFieldUpdateOperationsInput | string
    UserName?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }



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