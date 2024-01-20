import { Item } from "./Cart";

export type Some<A> = {
    readonly _tag: 'Some';
    readonly value: A;
}

export type None = {
    readonly _tag: 'None';
}

export type Option<A> = Some<A> | None;

const n1: Option<number> = { _tag: 'Some', value: 1 };  // 매번 이렇게 작성하기 빡침

export const some = <A>(value: A): Option<A> => ({ _tag: 'Some', value });

export const none = (): Option<never> => ({ _tag: 'None' });

const n2 = some(5);  // 이렇게 작성하면 됨

type IsSome = <A>(option: Option<A>) => option is Some<A>;
// type predicate is not compatible with boolean
// const isSome: IsSome = (option) => option._tag === 'Some';
// So, have to explicitly write the type in function expression
export const isSome = <A>(option: Option<A>): option is Some<A> => option._tag === 'Some';
export const isNone = <A>(option: Option<A>): option is None => option._tag === 'None';
/**
 * boolean 타입은 true 와 false 를 의미한다.
 * type predicate 로 작성한 is Some<A> 는 true 를 반환하면서 Some<A> 타입을 보장한다.
 * 즉, 단순히 true/false 만 반환하는 것이 아니기때문에 boolean 타입과 type predicate 는 호환될 수 없다.
 */

type FromUndefined = <A>(a?: A) => Option<A>;
// export const fromUndefined = <A>(a: A | undefined): Option<A> => {
export const fromUndefined: FromUndefined = (a) => {
    if (a === undefined) {
        return none();
    }
    return some(a);
}

/**
 * 사용예시
 */
// const stockItem = (item: Item): string => {
//     let saleText = '';
//     let discountPrice = 0;
//     if (item.discountPrice !== undefined) {
//         saleText = 'SALE';
//         discountPrice = item.discountPrice;
//     }
//     return saleText;
// }

// const totalDiscountPrice = (item: Item): number => {
//     let discountPrice = 0;
//     if (item.discountPrice !== undefined) {
//         discountPrice = item.discountPrice;
//     }
//     return discountPrice;
// }
/**
 * if (item.discountPrice !== undefined) {
 *   // 내부 로직
 * }
 * 이것이 계속 반복되는 것을 확인할 수 있음
 */

const stockItem = (item: Item): string => {
    let saleText = '';
    let discountPrice = 0;
    if (item.discountPrice !== undefined) {
        saleText = 'SALE';
        discountPrice = item.discountPrice;
    }
    return saleText;
}

const totalDiscountPrice = (item: Item): number => {
    let discountPrice = 0;
    if (item.discountPrice !== undefined) {
        discountPrice = item.discountPrice;
    }
    return discountPrice;
}