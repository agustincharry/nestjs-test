export interface GlobalMapper <T1, T2> {
  mappObjT1_T2(obj: T1): T2;
  mappListT1_T2(list: Array<T1>): Array<T2>;
  mappObjT2_T1(obj: T2): T1;
  mappListT2_T1(list: Array<T2>): Array<T1>;
}