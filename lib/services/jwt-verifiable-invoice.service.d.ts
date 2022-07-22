import { Algorithm } from 'jsonwebtoken';
import { VerifiableInvoiceUtilService } from '../classes/verifiable-invoice.class';
export interface JWTVerifiableInvoiceUtilServiceOptions {
    privateKey: string;
    subject: string;
    issuer: string;
    algorithm?: Algorithm;
}
export declare class JWTVerifiableInvoiceUtilService implements VerifiableInvoiceUtilService {
    private readonly privateKey;
    private readonly algorithm;
    private readonly subject;
    private readonly issuer;
    constructor(options: JWTVerifiableInvoiceUtilServiceOptions);
    create(invoiceClaims: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>): Promise<string>;
    verify(invoice: string): Promise<string>;
}
