export interface Success<T> {
  kind: 'success'
  value: T
}

export interface Failure<E> {
  kind: 'failure'
  error: E
}

export type Result<T, E> = Success<T> | Failure<E>

export const unit = <T>(T: T): Success<T> => ({ kind: 'success', value: T })
export const failure = <E>(E: E): Failure<E> => ({ kind: 'failure', error: E })
