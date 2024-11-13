import { UndeclaredPolicyCheck } from '../../policies/undeclared-policy-check';
import { PR_STATUS } from '../../policies/policy-check';

export class TesteableUndeclaredPolicyCheck extends UndeclaredPolicyCheck {

   private summary: string | undefined;
   private text: string | undefined;

   public buildArgsTestable(): Array<string> {
      return this['buildArgs']();
   }

   protected async success(summary: string, text?: string): Promise<void> {
      this.text = text;
      this.summary = summary;
   }

   protected async reject(summary: string, text?: string): Promise<void> {
      this.text = text;
      this.summary = summary;
   }

   public getDescription(){
      return this.summary;
   }

   public details(){
      return this.text;
   }
}