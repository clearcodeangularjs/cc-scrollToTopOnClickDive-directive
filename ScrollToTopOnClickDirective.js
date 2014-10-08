/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-scrollToTopOnClickDive-directive.

    cc-scrollToTopOnClickDive-directive is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-scrollToTopOnClickDive-directive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-scrollToTopOnClickDive-directive.  If not, see <http://www.gnu.org/licenses/>.

*/
angular.module('cc.scrollToTopOnClickDive.directive', [])
.directive('scrollToTopOnClickDive', function() {
        return {
            restrict: 'A',
            link: function(scope, $elm) {
                $elm.on('click', function() {
                    $('body').animate({scrollTop: 0});
                });
            }
        }
    });