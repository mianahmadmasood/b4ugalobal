<?php

namespace App\Http\Requests;

use App\CBAccounts;
use App\Currencies;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class RequestConstants
{

    ## URL Validations
    const URLRegex = 'regex:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/u';
    const URLValidation = [
        RequestConstants::URLRegex,
        'url',
        'active_url'
    ];


    const onlyNumberValidation = 'required|regex:/\d+/u|numeric';

    ## Group validation.
    const GroupNameValidationRequire = 'required|max:255|unique:groups';

    ## template validation.
    const TemplateSubjectValidationRequire = 'required|max:255';
    const TemplateEmailmediumValidationRequire = 'required|in:EMAIL,email|regex:/^[\w-]*$/u';

    const TemplatePushNotificationmediumValidationRequire = 'required|in:PUSH_NOTIFICATION,Push_Notification|regex:/^[\w-]*$/u';
    const TemplateSmsmediumValidationRequire = 'required|in:SMS,Sms|regex:/^[\w-]*$/u';


    const TemplateCampaignStatusValidationRequire = 'required|in:created,queued,running,completed|regex:/^[\w-]*$/u';




    const DateValidationRequire = 'required|date';

    ## get Cashbox account id validation
    public static function cashBoxAccountIdValidation()
    {
        return [
            'required',
            'numeric',
            'regex:/\d+/u',
            Rule::exists('cb_accounts', 'id')->where('user_id', Auth::user()->id)
        ];
    }


    public static function DepositPaymentModeRequired()
    {
        $currencies = Currencies::getCurrencies('name');
        return 'required|in:Bank transfer,Credit card,Paypal' . implode(',', $currencies->toArray());
    }

    /**
     * @Purpose get CashBox Current balance.
     * @param $currencyCode
     * @return string
     */
    public static function cashBoxAmountValidation($currencyCode): string
    {
        $currentBalance = CBAccounts::getCashBoxCurrentBalanceByCurrencyCode($currencyCode);
        $minAmount = CBAccounts::getMinimumAmountToInvestFromCashBox($currencyCode);
//        return RequestConstants::AmountRegexRequired . '|min:' . $minAmount . '|max:' . $currentBalance;
        return RequestConstants::AmountRegexRequired . "|min:{$minAmount}|max:{$currentBalance}";
    }

}
